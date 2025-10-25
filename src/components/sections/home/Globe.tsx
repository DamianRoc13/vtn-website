"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import { Color, Fog, Mesh, PerspectiveCamera, Scene, Vector3 } from "three";

import countries from "./data/globe.json";

extend({ ThreeGlobe });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: any;
    }
  }
}

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings: number[] = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const globeInstance = useMemo(() => new ThreeGlobe(), []);

  const defaultProps = useMemo(
    () => ({
      pointSize: 1,
      atmosphereColor: "#ffffff",
      showAtmosphere: true,
      atmosphereAltitude: 0.1,
      polygonColor: "rgba(255,255,255,0.5)",
      globeColor: "#0f172a",
      emissive: "#000000",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    }),
    [globeConfig],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    buildData();
    buildMaterial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, defaultProps, data]);

  const buildMaterial = () => {
    const globeMaterial = globeInstance.globeMaterial() as Mesh["material"] & {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(defaultProps.globeColor ?? "#0f172a");
    globeMaterial.emissive = new Color(defaultProps.emissive ?? "#000000");
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity ?? 0.1;
    globeMaterial.shininess = defaultProps.shininess ?? 0.9;
  };

  const buildData = () => {
    const arcs = data ?? [];
    const points: {
      size: number;
      order: number;
      color: (t: number) => string;
      lat: number;
      lng: number;
    }[] = [];

    if (arcs.length === 0) {
      setGlobeData([]);
      return;
    }

    arcs.forEach((arc) => {
      if (!arc) return;
      const rgb = hexToRgb(arc.color);
      if (!rgb) return;

      if (Number.isFinite(arc.startLat) && Number.isFinite(arc.startLng)) {
        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) =>
            `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, 1 - t)})`,
          lat: arc.startLat,
          lng: arc.startLng,
        });
      }

      if (Number.isFinite(arc.endLat) && Number.isFinite(arc.endLng)) {
        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) =>
            `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, 1 - t)})`,
          lat: arc.endLat,
          lng: arc.endLng,
        });
      }
    });

    const filteredPoints = points.filter(
      (item, index, arr) =>
        Number.isFinite(item.lat) &&
        Number.isFinite(item.lng) &&
        arr.findIndex(
          (candidate) =>
            candidate.lat === item.lat && candidate.lng === item.lng,
        ) === index,
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (
      !globeInstance ||
      !globeData ||
      globeData.length === 0 ||
      isAnimationStarted
    ) {
      return;
    }

    const validCountries = countries.features.filter(
      (feature) =>
        feature.geometry && Array.isArray(feature.geometry.coordinates),
    );

    globeInstance
      .hexPolygonsData([])
      .arcsData([])
      .pointsData([])
      .ringsData([]);

    globeInstance
      .hexPolygonsData(validCountries)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor ?? "rgba(255,255,255,0.5)");

    setIsAnimationStarted(true);
    const timeout = setTimeout(startAnimation, 100);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globeInstance, globeData, isAnimationStarted, defaultProps]);

  const startAnimation = () => {
    if (!globeInstance || !globeData) return;

    try {
      const validArcsData = ((data ?? []) as Position[]).filter(
        (arc) =>
          Number.isFinite(arc.startLat) &&
          Number.isFinite(arc.startLng) &&
          Number.isFinite(arc.endLat) &&
          Number.isFinite(arc.endLng),
      );

      if (validArcsData.length === 0) {
        console.warn("No valid arc data available");
        return;
      }

      globeInstance
        .arcsData(validArcsData)
        .arcStartLat((d: object) => (d as Position).startLat ?? 0)
        .arcStartLng((d: object) => (d as Position).startLng ?? 0)
        .arcEndLat((d: object) => (d as Position).endLat ?? 0)
        .arcEndLng((d: object) => (d as Position).endLng ?? 0)
        .arcColor((d: object) => (d as Position).color ?? "#ffffff")
        .arcAltitude((d: object) =>
          Number.isFinite((d as Position).arcAlt)
            ? (d as Position).arcAlt
            : 0.1,
        )
        .arcStroke(() => 0.3)
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((d: object) =>
          Number.isFinite((d as Position).order)
            ? (d as Position).order
            : Math.random() * 3,
        )
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime ?? 2000);

      globeInstance.pointsData([]).pointsMerge(true).pointAltitude(0).pointRadius(2);

      globeInstance
        .ringsData([])
        .ringMaxRadius(defaultProps.maxRings ?? 3)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime ?? 2000) *
            (defaultProps.arcLength ?? 0.9) /
            Math.max(defaultProps.rings ?? 1, 1),
        );
    } catch (error) {
      console.error("Error in startAnimation:", error);
    }
  };

  useEffect(() => {
    if (!globeInstance || !globeData) return;

    const interval = setInterval(() => {
      try {
        if (!globeInstance || !globeData) return;

        numbersOfRings = genRandomNumbers(
          0,
          data.length,
          Math.max(Math.floor((data.length * 4) / 5), 1),
        );

        const validRingPoints = globeData.filter(
          (_, index) => numbersOfRings.includes(index),
        );

        if (validRingPoints.length > 0) {
          globeInstance.ringsData(validRingPoints);
        }
      } catch (error) {
        console.error("Error updating rings:", error);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [globeInstance, globeData, data.length]);

  if (!isMounted) {
    return null;
  }

  return <primitive object={globeInstance} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x0f172a, 0);
  }, [gl, size]);

  return null;
}

export function World({ globeConfig, data }: WorldProps) {
  const scene = useMemo(() => {
    const currentScene = new Scene();
    currentScene.fog = new Fog(0xffffff, 400, 2000);
    return currentScene;
  }, []);

  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(50, 1, 180, 1800)}
      style={{ width: "150%", height: "150%", top:"-20%" }}
    >
      <WebGLRendererConfig />
      <ambientLight
        color={globeConfig.ambientLight}
        intensity={0.6}
      />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const normalised = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b,
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalised);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  const safeMax = Math.max(max, min + 1);

  while (arr.length < count) {
    const candidate = Math.floor(Math.random() * (safeMax - min)) + min;
    if (!arr.includes(candidate)) {
      arr.push(candidate);
    }

    if (arr.length >= safeMax - min) {
      break;
    }
  }

  return arr;
}
