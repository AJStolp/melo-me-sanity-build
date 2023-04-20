import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { landingImage } from "@/types/landing-image";

export async function getHero(): Promise<hero[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "hero"]{
      _id,
      _createdAt,
      heading,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      description,
      alt,
      cta
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

export async function getLandingImage(): Promise<landingImage[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "lpimage"] {
    _id,
    _createdAt,
    image
  }`);
}
