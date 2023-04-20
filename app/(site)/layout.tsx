import { getLandingImage, getNavigation } from "@/sanity/sanity-utils";
import "../globals.css";
import Navigation from "./components/navigation/navigation";
import Image from "next/image";
import TrimmingCannabis from "../assets/trimming-cannabis.png";

export const metadata = {
  title: "My Awesome Demo",
  description:
    "Written in the new nextjs 13 package that uses the new app directory",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationData = await getNavigation();
  const lpImageData = await getLandingImage();

  return (
    <html lang="en" className="">
      <body className="">
        {/* <Image
          src={TrimmingCannabis}
          alt={"trimming cannabis with black gloves"}
          className="ya"
        /> */}
        <Navigation data={navigationData} />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
