import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "5d6920vu",
  dataset: "production",
  title: "Meloish",
  apiVersion: "2023-04-10",
  basePath: "/admin",
  plugins: [deskTool()],
  shcema: { types: schemas },
});

export default config;
