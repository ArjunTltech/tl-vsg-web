import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: "Great Experience for Building Customers & Businesses",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-pinterest-p",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      text: "About",
      href: "/about",
    },
    {
      id: 2,
      text: "Meet our team",
      href: "/team",
    },
    {
      id: 3,
      text: "Case stories",
      href: "/case",
    },
    {
      id: 4,
      text: "Latest news",
      href: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Support",
      href: "/about",
    },
    {
      id: 7,
      text: "Terms of use",
      href: "/about",
    },
    {
      id: 8,
      text: "Privacy policy",
      href: "/about",
    },
    {
      id: 9,
      text: "Help",
      href: "/about",
    },
  ],
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  address: "No.102, Shaili Gardenia, Sainikpuri, Hyderabad - 87",
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
  email: "venkatesans@venkatesans.com",
  author: "TL Technologies",
  year: new Date().getFullYear(),
};

export default footerData;
