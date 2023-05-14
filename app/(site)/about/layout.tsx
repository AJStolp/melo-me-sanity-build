export const metadata = {
  title: "About Page",
  description:
    "Here, you can learn about the team and the dispensary as a whole.",
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
