import { PortableTextBlock } from "sanity";

export type page = {
  _id: string;
  _createdAt: Date;
  slug: string;
  heading: string;
  subheading: string;
  content: PortableTextBlock;
};
