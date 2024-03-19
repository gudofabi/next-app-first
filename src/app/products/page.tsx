import Link from "next/link";

export default function Products() {
  const productList = () => {
    const products = [1, 2, 3];

    return (
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <Link href={`/products/${item}`}>Product {item}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Product List</h1>
      {productList()}
    </>
  );
}
