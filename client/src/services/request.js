import axios from "axios";
import myAxios from "./myAxios";

export const heroLoader = async () => {
  try {
    const response = await myAxios.get(`/api/hero`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export const heroLoaderDetails = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/hero/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export function getHeros(band) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/hero?band=${band}`)
    .then((response) => response.data.result)
    .catch((error) => console.error(error));
}

export function getBands() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/band`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
