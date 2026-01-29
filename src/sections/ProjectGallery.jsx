import "../styles/ProjectGallery.css";

import mcHome from "../assets/galleryImages/menscarthome.png";
import mcShop from "../assets/galleryImages/menscartshop.png";
import mcCart from "../assets/galleryImages/menscartcart.png";
import dfShop from "../assets/galleryImages/dryfruitbazarshop.png";
import dfProduct from "../assets/galleryImages/dryfruitbazarproduct.png";
import dfCart from "../assets/galleryImages/dryfruitbazarcart.png";

function ProjectGallery() {
  return (
    <section className="gallery">
      <h2 className="section-title">Project Screenshots</h2>

      <div className="gallery-grid">
        <img src={mcHome} alt="MensCart Home Page" />
        <img src={mcShop} alt="MensCart Shop Page" />
        <img src={mcCart} alt="MensCart Cart Page" />
        <img src={dfShop} alt="DryFruitBazar Shop Page" />
        <img src={dfProduct} alt="DryFruitBazar Products Page" />
        <img src={dfCart} alt="DryFruitBazar Cart Page" />
      </div>
    </section>
  );
}

export default ProjectGallery;