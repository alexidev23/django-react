import { User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="w-full px-8 py-4 flex justify-between">
      <div className="">
        <h1 className="text-2xl font-bold">Todo App</h1>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <User />
        </div>
      </div>
    </header>
  )
}
