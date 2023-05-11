const Home = {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "copy",
      title: "Copy",
      type: "text",
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
  ],
};

export default Home;
