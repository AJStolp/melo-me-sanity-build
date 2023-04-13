import { createClient, groq } from "next-sanity";
import { landingpage } from "@/types/landingpage";
import { navigation } from "@/types/navigation";
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

export async function getNavigation(): Promise<navigation[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "navigation"] {
    _id,
    _createdAt,
    linkname,
    'slug': slug.current,
  }`);
}
