const Navigation = {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "linkname",
      title: "Link Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "navigation" },
    },
  ],
};

export default Navigation;
