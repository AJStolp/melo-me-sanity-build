import "../globals.css";

export const metadata = {
  title: "My Awesome Demo",
  description: "My Awesome Demo for a dispensary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="p-8">
        {/* {NAV HERE} */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
