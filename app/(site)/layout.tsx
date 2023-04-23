import { getNavigation } from "@/sanity/sanity-utils";
import "../globals.css";
import Navigation from "./components/navigation/navigation";

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
        <Navigation data={navigationData} />
        <main className="">{children}</main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  );
}
