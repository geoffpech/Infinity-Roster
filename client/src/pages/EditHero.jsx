import { Form, useLoaderData } from "react-router-dom";
import FormHero from "../components/FormHero";

export default function EditHero() {
  const bands = useLoaderData();

  return (
    <div className="Edit_Hero_background">
      <div className="Edit_hero">
        <Form
          className="Edit_hero_form"
          metho="put"
          encType="multipart/form-data"
        >
          <FormHero bands={bands} />
          <div className="Container_submit">
            <button type="submit" className="Edit_hero_remake">
              Mettre à jour le héro
            </button>
          </div>
        </Form>
        <div className="Container_title">
          <h2>Vous voulez supprimer le héro ?</h2>
        </div>
        <Form method="delete">
          <div className="Container_delete">
            <button type="submit" className="Edit_hero_delete">
              Supprimer le héro
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
