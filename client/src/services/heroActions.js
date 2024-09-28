import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const heroActions = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post("/api/hero", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          name: formData.get("name"),
          alias: formData.get("alias"),
          biography: formData.get("biography"),
          image: formData.get("image"),
          band_id: formData.get("band_id"),
        });
        if (response.status === 201) {
          return redirect(`/`);
        }
      } catch (err) {
        return err.response.data;
      }
      return new Response("Ton héro est créé ! Félicitation 🎉", {
        status: 201,
      });
    }
    case "put": {
      try {
        const response = await myAxios.put(`/api/hero/${params.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          name: formData.get("name"),
          alias: formData.get("alias"),
          biography: formData.get("biography"),
          image: formData.get("image"),
          band_id: formData.get("band_id"),
        });
        if (response.status === 201) {
          return redirect(`/`);
        }
      } catch (err) {
        return err.response.data;
      }
      return new Response("Ton héro à bien été mis à jour 📝", {
        status: 201,
      });
    }

    case "delete": {
      await myAxios.delete(`/api/hero/${params.id}`, {
        withCredentials: true,
      });
      return redirect(`/`);
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default heroActions;
