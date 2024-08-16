import Signup from "@/components/Signup";
import Signin from "@/components/Signin";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {/* <Signin /> */}

        <br />
        <hr />
        <hr />
        <br />

        <Signup />
      </div>
    // </main>
  );
}
