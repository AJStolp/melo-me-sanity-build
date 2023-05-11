const Contact = {
  name: "contact",
  title: "Contact",
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
  ],
};

export default Contact;
