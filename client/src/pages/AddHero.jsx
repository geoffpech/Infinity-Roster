import { Form, useLoaderData } from "react-router-dom";
import FormHero from "../components/FormHero";

export default function AddHero() {
  const bands = useLoaderData();

  return (
    <div className="Add_hero">
      <Form
        className="Add_hero_form"
        method="post"
        encType="multipart/form-data"
      >
        <FormHero bands={bands} />
        <div className="AddHero_title_submit">
          <h2>Votre héro est prêt ?</h2>
          <button className="AddHero_button" type="submit">
            Ajouter
          </button>
        </div>
      </Form>
    </div>
  );
}
