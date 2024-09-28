import { Form, useLoaderData } from "react-router-dom";
import FormHero from "../components/FormHero";

export default function AddHero() {
  const bands = useLoaderData();

  return (
    <div className="Add_hero">
      <Form className="Add_hero_form" method="post">
        <FormHero bands={bands} />
        <h2>Votre héro est prêt ?</h2>
        <button type="submit">Ajouter</button>
      </Form>
    </div>
  );
}
