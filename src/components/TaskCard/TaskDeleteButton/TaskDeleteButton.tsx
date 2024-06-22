import Link from "next/link";
import { FC } from "react";
import { FaTrashCan } from "react-icons/fa6";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: FC<TaskDeleteButtonProps> = (props) => {
  const { id } = props;
  return (
    <form action="">
      <button
        type="submit"
        className="hover:text-gray-700 text-lg cursor-pointer"
      >
        <FaTrashCan />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
