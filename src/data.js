import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.jpg";
import tour3 from "./images/tour-3.jpg";
import tour4 from "./images/tour-4.jpg";
import tour5 from "./images/tour-5.jpg";
import tour6 from "./images/tour-6.jpg";

export const pagelinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "benefits" },
  { id: 4, href: "#tours", text: "places" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", class: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", class: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", class: "fab fa-squarespace" },
];

export const aboutlinks = [
  { id: 1, icon: "fas fa-wallet fa-fw", text: "cost effective" },
  { id: 2, icon: "fas fa-car ", text: "great connectivity" },
  { id: 3, icon: "fas fa-hamburger ", text: "delicous food" },
];

export const tourslink = [
  {
    id: 1,
    image: tour1,

    title: "DLF MALL OF INDIA",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector 18",
    duration: 6,
    cost: "1500 for 2",
  },
  {
    id: 2,
    image: tour2,
    title: "Worlds of Wonder park",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector-18",

    cost: "1400 for 2",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "Godavari Market",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector 37",

    cost: "500 for 2",
  },
  {
    id: 4,
    image: tour4,

    title: "Brahmaputra Market",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector 29",
    duration: 20,
    cost: "500 for 2",
  },

  {
    id: 5,
    image: tour5,

    title: "Secor-104",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector 104",
    duration: 20,
    cost: "1000 for 2",
  },

  {
    id: 6,
    image: tour6,

    title: "Darjeeling Momos",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Sector 18",
    duration: 20,
    cost: "120 for 2",
  },
];
