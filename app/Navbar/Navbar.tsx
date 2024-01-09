import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { getCart } from "@/lib/db/cart";
import ShoppingCardBtn from "./ShoppingCardBtn";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src={logo} height={40} width={40} alt="logo" />
            commerce
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShoppingCardBtn cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
