"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();

  const handleClick = () => {
    console.log("just got hit!");
    router.push("/");
    // router.back()
    // router.forward()
    // router.replace('/')
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
