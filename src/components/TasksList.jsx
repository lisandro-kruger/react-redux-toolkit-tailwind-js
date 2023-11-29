import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

const TasksList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

  return (
    <>
    <div className="w-4/5">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks ({tasks.length})</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-md text-sm shadow-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center rounded-md"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default TasksList;