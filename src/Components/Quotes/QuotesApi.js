import axios from "axios";

const uri = "https://api.paperquotes.com/apiv1/quotes/";
const api_key = "e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772";
let configKey = {
  method: "GET",
  mode: "no-cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: "Token " + api_key
  },
  withCredentials: true,
  credentials: "same-origin"
};

export function getQuotes(tag) {
  // axios.get(`${uri}?limit=10`,configKey).then(res => {
  //     return res.data;
  // })
  //   return axios.get("https://jsonplaceholder.typicode.com/users");
  return axios.get(`${uri}?limit=20&tags=${tag}`, configKey);
}

export function getQuotesRandom() {
  return axios.get(`${uri}?limit=5`, configKey);
}
