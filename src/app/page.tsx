import Image from "next/image";
import Home from "./components/Home";

export default function LandingPage() {
  return (
    <div className="size-full flex flex-col gap-8 items-center justify-center">
      <Home/>
    </div>
  );
}
