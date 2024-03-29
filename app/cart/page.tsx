import { getCart } from "@/lib/db/cart";
import React from "react";
import CartEntry from "./CartEntry";
import formatPrice from "@/lib/format";

export const metadata = {
  title: "You Cart",
};

async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1>
        {cart?.items.map((cartItem) => (
          <CartEntry cartItem={cartItem} key={cartItem.id} />
        ))}
      </h1>
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
