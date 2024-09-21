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
