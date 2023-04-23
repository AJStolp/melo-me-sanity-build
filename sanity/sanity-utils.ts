import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { dailydeals } from "@/types/daily-deals";
import { page } from "@/types/page";
import { accordion } from "@/types/accordion";

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

export async function getDailyDeals(): Promise<dailydeals[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "dailydeals"] {
    _id,
    _createdAt,
    day,
    deal
  }`);
}

export async function getPages(): Promise<page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"] {
    _id,
    _createdAt,
    'slug': slug.current,
    content,
    heading,
    subheading,
  }`
  );
}

export async function getPage(slug: string): Promise<page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && "navigation" && slug.current] {
    _id,
    _createdAt,
    'slug': slug.current,
    heading,
    subheading,
  }`,
    { slug }
  );
}

export async function getAccordion(): Promise<accordion[]> {
  return createClient(clientConfig).fetch(groq`*[_type == 'accordion'] {
    _id,
    _createdAt,
    heading,
    content
  }`);
}
