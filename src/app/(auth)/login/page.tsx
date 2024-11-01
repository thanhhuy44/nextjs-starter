"use client";

import { signIn } from "next-auth/react";

function Page() {
  const click = async () => {
    try {
      await signIn("credentials", {
        email: "admin@gmail.com",
        password: "12345678x@X",
        callbackUrl: "/",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <button onClick={click}>login</button>
    </main>
  );
}

export default Page;
