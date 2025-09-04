import { BookHeart, Camera, Clock, Home, MapPin, MessageCircle, Users } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Boda Vanessa & Emanuel",
  description: "Vanessa & Emanuel — Una página para celebrar nuestro amor, nuestra historia y la alegría de reunirnos en el día de nuestra boda.",
  navItems: [
    {
      label: "Inicio",
      href: "/"
    },
    {
      label: "Detalles",
      href: "/",
    },
    {
      label: "Itinerario",
      href: "/docs",
    },
    {
      label: "Historia",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/"
    },
    {
      label: "Detalles",
      href: "/",
    },
    {
      label: "Itinerario",
      href: "/docs",
    },
    {
      label: "Historia",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    authLogin: "/auth/login",
  },
  navMenuItemsDashboard: [
    {
      label: "Inicio",
      href: "/",
      icon: <Home className="w-6 h-6"/>
    },
    {
      label: "Galeria",
      href: "gallery",
      icon: <Camera className="w-6 h-6"/>
    },
    {
      label: "Mensajes",
      href: "messages",
      icon: <MessageCircle className="w-6 h-6"/>
    },
    {
      label: "Timeline",
      href: "timeline",
      icon: <Clock className="w-6 h-6"/>
    },
    {
      label: "Mapa",
      href: "map",
      icon: <MapPin className="w-6 h-6"/>
    },
    {
      label: "Invitados",
      href: "guest",
      icon: <Users className="w-6 h-6"/>
    },
    {
      label: "Nuestra historia",
      href: "our-history",
      icon: <BookHeart className="w-6 h-6"/>
    },
  ]
};
