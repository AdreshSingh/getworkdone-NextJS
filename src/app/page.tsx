import Image from "next/image";
import { Dashboard } from "./ui/dashboard";
import { HomePage } from "./ui/HomePage";
import { NavBar } from "./ui/navbar";

export default function Home() {
  return (
    <div className='w-screen'>
      <Dashboard />
      <NavBar />
      <HomePage />
      </div>
  );
}
