import Task from "./Task"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Hier die switches implemtieren :F

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Task topic={undefined} nextPage={undefined} addMessage={undefined} addTime={undefined}></Task>
    </main>
  );
}
