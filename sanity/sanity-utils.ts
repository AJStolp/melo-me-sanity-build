import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { page } from "@/types/page";
import { table } from "@/types/table";

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

export async function getHome(): Promise<page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"] {
    _id,
    _createdAt,
    heading,
    copy,
    cta,
    "image": image.asset->url,
  }`
  );
}

export async function getTable(): Promise<table[]> {
  return createClient(clientConfig)
    .fetch(groq`*[_type == 'table'] | order(_createdAt desc) {
    _id,
    _createdAt,
    heading,
    content
  }`);
}
