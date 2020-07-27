const got = require("got");

const makeRequest = async (reqUrl, type, place, callback) => {
  try {
    if (type === "map") {
      reqUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYXNoaXNoZmVlbHMiLCJhIjoiY2tkM2hyajlzMWYwMTJxcXYybWltMHMzYSJ9.IBAdacbfAKd7HQKZ9gTkTg&limit=1`;
    }
    const response = await got(reqUrl);
    const body = JSON.parse(response.body);
    const data =
      type === "weather" ? body.current.temp_c : body.features[0].center;
    if (data) {
      callback(data, null);
    }
  } catch (err) {
    if (err) {
      callback(null, err);
    }
  }
};

const tempreture = (data, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`The Tempreture Outside is ${data} degree celcius`);
  }
};

const callback = (data, error) => {
  if (error) {
    console.log(error);
  } else {
    url = `http://api.weatherapi.com/v1/current.json?key=a21aa72a43be4612a3072427202706&q=${data[1]},${data[0]} `;
    makeRequest(url, "weather", null, tempreture);
  }
};

makeRequest(null, "map", "ranchi", callback);
