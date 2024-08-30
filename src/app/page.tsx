import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import Category from "../components/category";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import Footer from "../components/footer";
import "./globals.css";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <Category />
        <FrameComponent1 />
      </section>
      <FrameComponent2 />
      <FrameComponent3 />
      <Footer />
    </div>
  );
};

export default Desktop;