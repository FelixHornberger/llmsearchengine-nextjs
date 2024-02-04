import IntroPage from "./IntroPage"
import Task from "./Task"
import PostTask from "./PostTask";
import { Inter } from "next/font/google";
import { usePageStore } from "@/src/pagecounter";
import PreStudy from "./PreStudy";
import PreTask from "./PreTask";
import PostStudy from "./PostStudy";
import { Component } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {page} = usePageStore();
  let elementToReturn: JSX.Element | null = null;
  switch(page){
    case 0:
      elementToReturn =  <IntroPage nextPage={undefined} addTime={undefined} />;
      break;
    case 1:
      elementToReturn = <PreStudy/>
      break;
    case 2:
      elementToReturn = <PreTask topic={undefined} nextPage={undefined} setArgumentsBevorTask={undefined} mildness={undefined} addTime={undefined}/>;
      break;
    case 3:
      elementToReturn = <Task topic={undefined} nextPage={undefined} addMessage={undefined} addTime={undefined} />
      break;
    case 4:
      elementToReturn = <PostTask></PostTask>
      break;
    case 5: 
    elementToReturn = <PostStudy></PostStudy>
    break;
  }

  return (
    <main className={`${inter.className}`}>
      {elementToReturn}
    </main>
  );
};
