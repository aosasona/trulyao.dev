import Layout from "@defaults/Layout";
import Link from "next/link";
import React from "react";

const ErrorNotFound = () => {
  return (
    <Layout title="Page Not Found" description="Darn it! You got lost...">
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-[7rem] lg:text-[9rem] text-faded">404</h1>
        <p className="text-sm text-faded">Darn it! You got lost...</p>
        <Link href="/">
          <div className="w-[90vw] lg:w-1/4 mx-auto text-center bg-alt-dark text-sm text-faded rounded-sm py-3 px-2 mt-8">
            Go Home
          </div>
        </Link>
      </main>
    </Layout>
  );
};

export default ErrorNotFound;
