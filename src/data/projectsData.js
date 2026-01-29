import menscartImg from "../assets/projects/menscart.png"
import dryfruitbazarImg from "../assets/projects/dryfruitbazar.png"
import portfolioImg from "../assets/projects/portfolio.png"
import kfcImg from "../assets/projects/kfc.png"


const projectsData = [
  {
    id: 1,
    title: "MensCart",
    image:menscartImg,
    description:
      "A React-based e-commerce frontend with product listing, filters, cart management, and responsive UI. Built to practice modern React patterns and component-based architecture.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Varsha-K-V/menscart",
    live: "https://menscart-git-main-varsha-k-vs-projects.vercel.app/"
  },

  {
    id: 2,
    title: "Dry Fruit Bazar",
    image:dryfruitbazarImg,
    description:
      "A full-stack e-commerce application built using Node.js, Express, MongoDB, and EJS. Includes authentication, cart, orders, admin panel, product variants, and order management.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/Varsha-K-V/dry-fruit-bazar",
    live: "https://lnkd.in/ePb6VvrT"
  },

  {
    id: 3,
    title: "Portfolio Website",
    image:portfolioImg,
    description:
      "Personal developer portfolio built with React, showcasing projects, skills, and contact information with a responsive and clean UI.",
    tech: ["React", "CSS"],
    github: "https://github.com/Varsha-K-V/portfolio",
    live: "https://varsha-portfolio-snowy.vercel.app/"
  },

  {
    id: 4,
    title: "KFC Homepage Clone",
    image:kfcImg,
    description:
      "A responsive clone of the KFC homepage built with HTML and CSS, focusing on layout structure, spacing, and visual hierarchy.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Varsha-K-V/kfc-clone",
  },
];

export default projectsData;
