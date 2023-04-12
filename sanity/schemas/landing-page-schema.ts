const LandingPage = {
  name: "landingpage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "heading" },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
  ],
};
export default LandingPage;
