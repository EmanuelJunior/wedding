export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
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
};
