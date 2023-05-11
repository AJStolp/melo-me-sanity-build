export const metadata = {
  title: "",
  description: "",
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
