import { createClient, groq } from "next-sanity";
import { hero } from "@/types/hero";
import { navigation } from "@/types/navigation";
import clientConfig from "./client-config";
import { table } from "@/types/table";
import { contact } from "@/types/contact";
import { home } from "@/types/home";
import { earn } from "@/types/earn";
import { about } from "@/types/about";

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

export async function getHome(): Promise<home[]> {
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

export async function getEarn(): Promise<earn[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "earn"] {
    _id,
    _createdAt,
    heading,
    copy,
    scale,
    step1,
    subcopy1,
    step2,
    subcopy2,
    step3,
    subcopy3,
    step4,
    subcopy4,
  }`
  );
}

export async function getAbout(): Promise<about[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"] {
    _id,
    _createdAt,
    heading,
    copy,
    "image": image.asset->url,
    card1name,
    role1,
    description1,
    card2name,
    role2,
    description2,
    card3name,
    role3,
    description3,
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

export async function getContact(): Promise<contact[]> {
  return createClient(clientConfig).fetch(groq`*[_type == 'contact'] {
    _id,
    createdAt,
    heading,
    copy
  }`);
}
