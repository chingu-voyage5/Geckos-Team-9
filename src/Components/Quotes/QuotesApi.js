import axios from "axios";

const uri = "http://api.paperquotes.com/apiv1/quotes/";
const api_key = "e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772";
let configKey = {
  headers: {
    Authorization: "Token " + api_key
  }
};

export const getQuote = () => {
  // axios.get(`${uri}?limit=10`,configKey).then(res => {
  //     return res.data;
  // })
//   return axios.get("https://jsonplaceholder.typicode.com/users"); 
return axios.get(`${uri}?limit=10`,configKey);
};

export function getQuotes() {}
