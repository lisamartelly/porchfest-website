import mapPdf from "./resources/2025-porchfest-map-v2.pdf";

const Map = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px" }}>
          <h2>
            <a href={mapPdf} target="_blank" rel="noreferrer">
              Click here to download the 2025 PDF map + schedule
            </a>
          </h2>
        </div>
        <div style={{ height: "85vh" }}>
          <iframe
            title="porchfest_map"
            src="https://www.google.com/maps/d/u/1/embed?mid=1JIdjlA_73LbT7Gi11hDo6_EZZACBdOM&ehbc=2E312F"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
