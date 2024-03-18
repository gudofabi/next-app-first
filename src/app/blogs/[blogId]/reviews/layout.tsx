export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="reviews-content">
      {children}
      <h2>Feature Blogs</h2>
      <ul className="d-flex w-100">
        <li>Blog 1</li>
        <li>Blog 2</li>
        <li>Blog 3</li>
      </ul>
    </div>
  );
}