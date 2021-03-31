import React from "react";
import ReactGlobe from "react-globe";

const Globe = () => {
  const markers = [
    {
      id: "marker1",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    {
      id: "marker3",
      city: "San Francisco",
      color: "orange",
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    {
      id: "marker4",
      city: "Beijing",
      color: "gold",
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    {
      id: "marker5",
      city: "London",
      color: "green",
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    {
      id: "marker6",
      city: "Los Angeles",
      color: "gold",
      coordinates: [29.7604, -95.3698],
      value: 54,
    },
  ];

  const options = {
    cameraRotateSpeed: 0.5,
    cameraAutoRotateSpeed: 0.35,
    focusAnimationDuration: 2000,
    enableMarkerGlow: "true",
    globeCloudsOpacity: 0.5,
    globeGlowColor: "blue",
    markerTooltipRenderer: (marker) => `${marker.city}: ${marker.value}`,
  };

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
        initialCoordinates={[42.3355, 71.1685]}
        initialCameraDistanceRadiusScale={5}
      />
    </div>
  );
};

export default Globe;
