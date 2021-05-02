import React from "react";
import ReactGlobe, { tween } from "react-globe";
import readGlobeMarkers from "../services/readGlobeMarkers";
import * as THREE from "three";
import { createGlowMesh } from "three-glow-mesh";

const random = (scaleFactor) => {
  return Math.random() > 0.5
    ? scaleFactor * Math.random()
    : -scaleFactor * Math.random();
};

const markerRenderer = (marker) => {
  const size = Math.max(marker.value / 14, 1);
  const geometry = new THREE.SphereGeometry(size, 10, 10);
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(marker.color),
  });

  const mesh = new THREE.Mesh(geometry, material);
  const light = new THREE.PointLight(marker.color, 1, 0, 2);
  const glow = createGlowMesh(mesh.geometry, {
    backside: false,
    coefficient: 0.2,
    color: marker.color,
    power: 3,
    size: 15,
  });
  mesh.children = [];
  mesh.add(light);
  mesh.add(glow);

  const companions = [];
  for (let i = 0; i < 10; i++) {
    const companionGeometry = new THREE.SphereGeometry(
      Math.min(size * Math.random(), 3),
      10,
      10
    );
    const companionMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(marker.color),
    });
    const companion = new THREE.Mesh(companionGeometry, companionMaterial);
    companion.lookAt(new THREE.Vector3(0, 0, 0));
    companions.push(companion);
    mesh.add(companion);
  }

  companions.forEach((companion, i) => {
    function animate() {
      const from = {
        opacity: 0.1,
        position: companion.position.clone().toArray(),
        scale: Math.max(0.5, Math.random()),
      };
      const to = {
        opacity: 0.5,
        position: [random(size * 3), random(size * 3), random(size)],
        scale: 0.01,
      };
      tween({
        from,
        to,
        animationDuration: 4000,
        easingFunction: ["Quadratic", "InOut"],
        onUpdate: () => {
          const [x, y, z] = from.position;
          const companionMaterial = companion.material;
          const intensityChange = random(0.03);
          if (
            light.intensity + intensityChange > 0 &&
            light.intensity + intensityChange < 1.8
          ) {
            light.intensity += intensityChange;
          }
          companionMaterial.opacity = from.opacity;
          companion.scale.x = from.scale;
          companion.scale.y = from.scale;
          companion.scale.z = from.scale;
          companion.position.set(x, y, z);
        },
        onEnd: animate,
        delay: i * 200,
      });
    }
    animate();
  });
  return mesh;
};

const Globe = () => {
  const [markers, setMarkers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function check() {
      try {
        setLoading(true);
        let response = await readGlobeMarkers();
        setMarkers(response);
        setLoading(false);
      } catch (error) {
        // TODO: handle error
        setLoading(false);
        console.log(error);
      }
    }
    check();
  }, []);

  const options = {
    cameraRotateSpeed: 0.5,
    cameraAutoRotateSpeed: 0.35,
    focusAnimationDuration: 2000,
    enableMarkerGlow: "true",
    globeCloudsOpacity: 0.5,
    globeGlowColor: "blue",
    enableMarkerTooltip: true,
    markerTooltipRenderer: (marker) => `${marker.city}: ${marker.score}`,
    markerRenderer,
  };

  if (loading) return <span>Loading</span>;

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <ReactGlobe
        height="90vh"
        width="auto"
        markers={markers}
        options={options}
        initialCoordinates={[25.0, -70.0]}
        initialCameraDistanceRadiusScale={5}
      />
    </div>
  );
};

export default Globe;
