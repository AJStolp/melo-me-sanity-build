const About = {
  name: "about",
  title: "About",
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
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "cardheading",
      title: "Card Heading",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "role",
      type: "string",
    },
  ],
};

export default About;
