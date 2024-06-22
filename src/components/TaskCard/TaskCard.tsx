import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "./TaskEditButton/TaskEditButton"

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">タイトル</h1>
        <div className="mt-1 text-sm line-clamp-3">ToDoの説明</div>
      </header>
      <div>
        <div className="text-sm">2024-12-31</div>
        <div className="flex justify-between items-center">
          <div className={`mt-1 text-sm px-2 py-1 w-24 text-center rounded-full shadow-sm ${true ? 'text-sky-400 border outline-2 border-sky-400' : 'text-rose-400 border outline-2 border-rose-400'}`}>{true ? "完了" : "未完了"}</div>
          <div className="flex gap-4">
            <TaskEditButton id='1' />
            <TaskDeleteButton id='1' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard
