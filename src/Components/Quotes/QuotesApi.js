import axios from "axios";

const uri = "https://cors-anywhere.herokuapp.com/api.paperquotes.com/apiv1/quotes/";
// const uri = "https://api.paperquotes.com/apiv1/quotes/";
const api_key = "e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772";
let configKey = {
  headers: {
    Authorization: "Token " + api_key
  },
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
