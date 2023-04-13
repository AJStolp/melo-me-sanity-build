import { createClient, groq } from "next-sanity";
import { landingpage } from "@/types/landingpage";
import clientConfig from "./client-config";

export async function getLandingPage(): Promise<landingpage[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "landingpage"]{
      _id,
      _createdAt,
      heading,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      alt,
  }`);
}
