import EditTaskForm from "@/components/EditTaskForm/EdittTaskForm";

interface Params {
  params: { id: string }
}

const EditTaskPage = ({ params }: Params ) => {
  // const id = params.id
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Todoを編集</h2>
      <EditTaskForm />
    </div>
  );
}

export default EditTaskPage
