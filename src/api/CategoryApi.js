import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/categories/";

export function getCategories() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
