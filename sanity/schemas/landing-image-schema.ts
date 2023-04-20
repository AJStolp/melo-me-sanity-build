const LandingImage = {
  name: "lpimage",
  title: "Landing page Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hostspot: true },
      fields: [{ name: "alt", type: "string" }],
    },
  ],
};

export default LandingImage;
