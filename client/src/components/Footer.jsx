import { useEffect, useRef } from "react";
import kartingpool from "../assets/images/karting_pool.png";

function FooterCar() {
  const carRef = useRef(null); // Référence pour accéder à l'élément de la voiture

  useEffect(() => {
    let position = 0; // Position initiale de la voiture

    // Fonction pour déplacer la voiture
    function moveCar() {
      position += 1.5; // Incrément de position pour simuler le mouvement
      if (carRef.current) {
        // Appliquer la transformation pour déplacer la voiture horizontalement
        carRef.current.style.transform = `translateX(${position}px)`;

        // Réinitialiser la position quand la voiture dépasse la largeur de la fenêtre
        if (position < window.innerWidth) {
          requestAnimationFrame(moveCar); // Continuer l'animation
        } else {
          position = -100; // Repositionner la voiture au départ
          requestAnimationFrame(moveCar); // Relancer l'animation
        }
      }
    }
    // Lancer l'animation quand le composant est monté
    requestAnimationFrame(moveCar);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "130px",
        background: "#ffdd00",
        overflow: "hidden",
      }}
    >
      <img
        ref={carRef}
        src={kartingpool} // Chemin vers l'image de ta voiture
        alt="Car"
        style={{ position: "absolute", bottom: "0", width: "250px" }} // Style de l'image de la voiture
      />
    </div>
  );
}

export default FooterCar;
