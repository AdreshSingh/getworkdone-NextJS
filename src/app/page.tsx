import Image from "next/image";
import { Dashboard } from "./ui/dashboard";
import { HomePage } from "./ui/HomePage";

export default function Home() {
  return (
    <div className='w-screen'><Dashboard /><HomePage /></div>
  );
}
