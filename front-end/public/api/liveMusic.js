export default (req, res) => {
  res.statusCode = 200;
  res.json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-122.47008831446263, 37.77183742087868] },
        properties: {
          title: "Omar's House",
          cluster: false,
          venue: "blackcat",
          event_count: 10,
        },
      },
    ],
  });
};
