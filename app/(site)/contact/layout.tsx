export const metadata = {
  title: "Contact Page",
  description: "This is where you can contact the team at Melo.",
};

export default async function EarnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
}
