import { useEffect, useRef } from "react";
import kartingpool from "../assets/images/karting_pool.png";
import kartinglogan from "../assets/images/karting_wolverine.png";

function FooterCar() {
  const carRef = useRef(null); // Référence pour accéder à l'élément de la voiture

  useEffect(() => {
    let position = 0; // Position initiale de la voiture

    // Fonction pour déplacer la voiture
    function moveCar() {
      position += 2; // Incrément de position pour simuler le mouvement
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

  const carRefTwo = useRef(null); // Référence pour accéder à l'élément de la voiture

  useEffect(() => {
    let position = 0; // Position initiale de la voiture

    // Fonction pour déplacer la voiture
    function moveCar() {
      position += 1.5; // Incrément de position pour simuler le mouvement
      if (carRefTwo.current) {
        // Appliquer la transformation pour déplacer la voiture horizontalement
        carRefTwo.current.style.transform = `translateX(${position}px)`;

        // Réinitialiser la position quand la voiture dépasse la largeur de la fenêtre
        if (position < window.innerWidth) {
          requestAnimationFrame(moveCar); // Continuer l'animation
        } else {
          position = -400; // Repositionner la voiture au départ
          requestAnimationFrame(moveCar); // Relancer l'animation
        }
      }
    }
    // Lancer l'animation quand le composant est monté
    requestAnimationFrame(moveCar);
  }, []);

  return (
    <div className="Footer_container">
      <img
        className="Footer_first_car"
        ref={carRef}
        src={kartingpool} // Chemin vers l'image de ta voiture
        alt="Car"
      />
      <img
        className="Footer_second_car"
        ref={carRefTwo}
        src={kartinglogan} // Chemin vers l'image de ta voiture
        alt="Car"
      />
    </div>
  );
}

export default FooterCar;
