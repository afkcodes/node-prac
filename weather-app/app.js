const got = require("got");

const url =
  "http://api.weatherapi.com/v1/current.json?key=a21aa72a43be4612a3072427202706&q=12.971599,77.594566";

const mapBoxApi =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/bengal.json?access_token=pk.eyJ1IjoiYXNoaXNoZmVlbHMiLCJhIjoiY2tkM2hyajlzMWYwMTJxcXYybWltMHMzYSJ9.IBAdacbfAKd7HQKZ9gTkTg&limit=1";

let lat, long;

const makeRequest = async (reqUrl, type) => {
  try {
    const response = await got(reqUrl);
    const body = JSON.parse(response.body);
    const data =
      type === "weather" ?
       body.current.temp_c :
       body.features[0].center;
    return data;
  } catch (e) {
    console.log(e);
  }
};

makeRequest(url, "weather").then((data) => {
  console.log(`The Tempreture Outside is ${data} degree celcius`);
});

makeRequest(mapBoxApi, "map").then((data) => {
  lat = data[1];
  long = data[0];
  console.log(`Latitude : ${lat} Longitude ${long}`);
});
