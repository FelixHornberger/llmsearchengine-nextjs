import IntroPage from "@/components/pages/Intro";
import Task from "@/components/pages/Task";
import PostTask from "@/components/pages/PostTask";
import { Inter } from "next/font/google";
import { usePageStore } from "@/src/pagecounter";
import PreStudy from "@/components/pages/PreStudy";
import PreTask from "@/components/pages/PreTask";
import PostStudy from "@/components/pages/PostStudy";
import EndPage from "@/components/pages/EndPage";
import TaskDescription from "@/components/pages/TaskDescription";

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
      elementToReturn = <PreTask/>;
      break;
    case 3:
      elementToReturn = <TaskDescription/>
      break;
    case 4:
      console.log(page)
      elementToReturn = <Task/>
      break;
    case 5:
      elementToReturn = <PostTask/>
      break;
    case 6: 
      elementToReturn = <PostStudy/>
      break;
    case 7:
      elementToReturn = <EndPage/>
      break;
  }

  return (
    <main className={`${inter.className}`}>
      {elementToReturn}
    </main>
  );
};
