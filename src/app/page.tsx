import Hero from "@/containers/Hero";
import NewProduct from "@/containers/NewProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProduct/>
    </main>
  );
}
