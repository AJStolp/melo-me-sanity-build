import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { dailydeals } from "@/types/daily-deals";

export async function getHero(): Promise<hero[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "hero"]{
      _id,
      _createdAt,
      heading,
      "slug": slug.current,
      "image": image.asset->url,
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

export default function getDailyDeals(): Promise<dailydeals[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "dailydeals"] {
    _id,
    _createdAt,
    day,
    deal
  }`);
}
