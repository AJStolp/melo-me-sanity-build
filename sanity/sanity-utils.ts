import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { page } from "@/types/page";
import { accordion } from "@/types/accordion";
import { table } from "@/types/table";
import { jumbotroncards } from "@/types/jumbotron-with-cards";

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
    groq`*[_type == "page" && slug.current == $slug][0] {
    _id,
    _createdAt,
    'slug': slug.current,
    heading,
    subheading,
}
`,
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

export async function getTable(): Promise<table[]> {
  return createClient(clientConfig)
    .fetch(groq`*[_type == 'table'] | order(_createdAt desc) {
    _id,
    _createdAt,
    heading,
    content
  }`);
}

export async function getJumbotron(): Promise<jumbotroncards[]> {
  return createClient(clientConfig).fetch(groq`*[_type == 'jumbotron'] {
      _id,
      _createdAt,
      heading,
      content
  }`);
}
