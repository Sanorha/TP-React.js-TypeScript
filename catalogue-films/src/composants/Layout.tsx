import { Outlet } from "react-router-dom";
import Entete from "./Entete";
import PiedDePage from "./PiedDePage";

export default function Layout() {
  return (
<div className="h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-transparent dark:text-slate-100">
        <Entete />
      
     <main className="flex-1 overflow-y-auto p-6 max-w-6xl w-full mx-auto dark:bg-black/35 dark:backdrop-blur-sm dark:rounded-lg dark:my-4">
  <Outlet />
</main>

      <PiedDePage />
    </div>
  );
}