import { PortableTextBlock } from "sanity";

export type contact = {
  _id: string;
  _createdAt: Date;
  heading: string;
  copy: PortableTextBlock[];
};
