"use client"
import { CommonLayout } from "./components/(Sections)/CommonLayout";
import { Hero } from "./components/(Sections)/Hero";
import { Services } from "./components/(Services)/Services";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <CommonLayout title={"What we offer you"} >
        <Services />
      </CommonLayout>
      <CommonLayout title={"What we offer you"} >
        <Services />
      </CommonLayout>

      <CommonLayout title={"How we work"} />
    </div>
  );
}
