import { getNavigation } from "@/sanity/sanity-utils";
import "../globals.css";
import Navigation from "@/app/(site)/components/navigation/navigation";
import Script from "next/script";
import Link from "next/link";

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

  return (
    <html lang="en" className="">
      <body className="">
        {navigationData.map((val) => {
          return (
            <Link
              key={val._id}
              href={val.slug}
              className="flex items-center text-2xl"
            ></Link>
          );
        })}
        {/* <Navigation data={navigationData} /> */}
        <main className="">{children}</main>
        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
        ></Script>
      </body>
    </html>
  );
}
