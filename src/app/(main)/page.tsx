import { SignIn } from "@/components/sign-in";
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store",
  });

  if (response.status != 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  const allTasks = await getAllTasks();
  return (
    <div className="p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">すべてのTodo</h1>
        <div className="flex flex-col items-end gap-2">
          <SignIn />
          <Link
            href="/new"
            className="flex items-center gap-1 font-semibold border outline-2 border-sky-700 px-4 py-2 rounded-full shadow-md text-sky-700 hover:text-sky-500 hover:border-sky-500"
          >
            <MdAddTask className="size-5" />
            <div>ToDoを作成</div>
          </Link>
        </div>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={String(task._id)} task={task} />
        ))}
      </div>
    </div>
  );
}
