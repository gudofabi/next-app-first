import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Products() {
  return (
    <>
      <h1>Blog List</h1>
      <ul>
        <li>Blog 1</li>
        <li>Blog 2</li>
        <li>Blog 3</li>
      </ul>
    </>
  );
}
