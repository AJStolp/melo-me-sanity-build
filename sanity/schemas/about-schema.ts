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
      name: "card1name",
      title: "Card 1 Name",
      type: "string",
    },
    {
      name: "role1",
      title: "role 1",
      type: "string",
    },
    {
      name: "description1",
      title: "description 1",
      type: "string",
    },
    {
      name: "image1",
      title: "Image 1",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
    {
      name: "card2name",
      title: "Card 2 Name",
      type: "string",
    },
    {
      name: "role2",
      title: "role 2",
      type: "string",
    },
    {
      name: "description2",
      title: "description 2",
      type: "string",
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
    {
      name: "card3name",
      title: "Card 3 Name",
      type: "string",
    },
    {
      name: "role3",
      title: "role 3",
      type: "string",
    },
    {
      name: "description3",
      title: "description 3",
      type: "string",
    },
    {
      name: "image3",
      title: "Image 3",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "alt", type: "string" }],
    },
  ],
};

export default About;
