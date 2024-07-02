const menu = [
  { label: "Dashboard", to: "/dashboard" },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Web Development",
        to: "/services/web-development",
        children: [
          { label: "Frontend Development", to: "/services/web-development/frontend" },
          { label: "Backend Development", to: "/services/web-development/backend" },
        ],
      },
      { label: "Mobile Development", to: "/services/mobile-development" },
      { label: "SEO Optimization", to: "/services/seo" },
    ],
  },
  {
    label: "Portfolio",
    to: "/portfolio",
    children: [
      { label: "Web Projects", to: "/portfolio/web" },
      { label: "Mobile Projects", to: "/portfolio/mobile" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    children: [
      { label: "Latest Posts", to: "/blog/latest" },
      { label: "Categories", to: "/blog/categories" },
      { label: "Archives", to: "/blog/archives" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
  {
    label: "Resources",
    to: "/resources",
    children: [
      { label: "Documentation", to: "/resources/documentation" },
      {
        label: "Tutorials",
        to: "/resources/tutorials",
        children: [
          { label: "Beginner", to: "/resources/tutorials/beginner" },
          { label: "Intermediate", to: "/resources/tutorials/intermediate" },
          {
            label: "Advanced",
            to: "/resources/tutorials/advanced",
            children: [
              { label: "AI Techniques", to: "/resources/tutorials/advanced/ai-techniques" },
              { label: "Machine Learning", to: "/resources/tutorials/advanced/machine-learning" },
              { label: "Deep Learning", to: "/resources/tutorials/advanced/deep-learning" },
            ],
          },
        ],
      },
    ],
  },
];

export default menu;
