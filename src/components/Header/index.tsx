"use client";

import Link from "next/link";
import Form from "next/form";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { PackageIcon, UserIcon } from "@sanity/icons";
import BasketButton from "./basketButton";

const Header = () => {
  const { user } = useUser();
  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.log("Error: ", JSON.stringify(error));
    }
  };

  return (
    <header className="bg-white shadow-lg mb-10 ">
      <div className="flex items-center justify-center lg:justify-between px-4 py-3 gap-2 flex-wrap max-w-screen-xl mx-auto">
        <Link href="/" className="uppercase font-bold text-2xl">
          Shop
        </Link>

        <Form action={"/search"} className="w-full rounded-md max-w-md">
          <input
            type="text"
            name="query"
            className="bg-gray-300 w-full px-3 outline-1 h-8 rounded-md"
            placeholder="search for products"
          />
        </Form>

        <div className="flex  gap-6">
          <BasketButton />

          <ClerkLoaded>
            {user ? (
              <>
                <Button asChild>
                  <Link href={"/orders"}>
                    <PackageIcon className="w-6 h-6" />
                    K&ograve;mand mwen yo
                  </Link>
                </Button>
                <div className="flex items-center gap-1">
                  <UserButton />
                  <div className="hidden sm:block text-xs">
                    <p className="text-gray-400">Byenvini!</p>
                    <p className="font-bold">{user.fullName} </p>
                  </div>
                </div>
              </>
            ) : (
              <SignInButton mode="modal">
                <Button>
                  <UserIcon className="w-6 h-6" />
                  Konekte
                </Button>
              </SignInButton>
            )}

            {user?.passkeys.length === 0 && (
              <Button variant={"outline"} onClick={createClerkPasskey}>
                kreye on kle aks&egrave;
              </Button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
