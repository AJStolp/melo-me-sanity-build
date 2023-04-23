import { PortableTextBlock } from "sanity";

export type accordion = {
  _id: string;
  _createdAt: Date;
  heading: string;
  content: PortableTextBlock[];
};
