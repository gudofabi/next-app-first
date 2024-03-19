import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Hello World!!!</h1>
      <ul className="flex px-4">
        <li className="mr-2">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="mr-2">
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </>
  );
}
