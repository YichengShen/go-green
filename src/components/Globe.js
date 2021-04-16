import React from "react";
import ReactGlobe from "react-globe";
import readGlobeMarkers from "../services/readGlobeMarkers";

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
        initialCoordinates={[42.3355, 71.1685]}
        initialCameraDistanceRadiusScale={5}
      />
    </div>
  );
};

export default Globe;
