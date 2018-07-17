import axios from "axios";

const uri = "https://api.unsplash.com/photos/random/";
const api_key = "efcc44cc699b3e8880f12f8c2d92b75540a7ec54a5215a71a9cc1ff3a0230c66";
let configKey = {
  headers: {
    Authorization: "Client-ID " + api_key
  }
};

export const getPhotos = (query) => {
return axios.get(`${uri}?query=${query}&count=20`,configKey);
};

export function getPhotosRandom() {
  return axios.get(`${uri}?count=5`,configKey);
}
