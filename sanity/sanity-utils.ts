import { createClient, groq } from "next-sanity";
import { landingpage } from "@/types/landingpage";

export async function getLandingPage(): Promise<landingpage[]> {
  const client = createClient({
    projectId: "5d6920vu",
    dataset: "production",
    apiVersion: "2023-04-10",
    useCdn: true,
  });

  return client.fetch(groq`*[_type == "landingpage"]{
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
