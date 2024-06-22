import TaskCard from "@/components/TaskCard/TaskCard";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

export default function MainPage() {
  return (
    <div className="p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">すべてのTodo</h1>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border outline-2 border-sky-700 px-4 py-2 rounded-full shadow-md text-sky-700 hover:text-sky-500 hover:border-sky-500"
        >
          <MdAddTask className="size-5" />
          <div>ToDoを作成</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
