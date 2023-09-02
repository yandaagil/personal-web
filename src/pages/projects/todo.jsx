import Layout from "../components/projectDetail";
import todoapp from "../../images/todo/todoapp.png";

const Todo = () => {
  return (
    <Layout
      title="Todo App"
      desc="A simple todo list application crafted using HTML, JavaScript, and Bootstrap. Users can effortlessly input a list of tasks along with their respective dates. As tasks are completed, they can be seamlessly moved to the 'Done' section. This user-friendly application streamlines task management and organization."
      repo="https://github.com/yandaagil/todoapps"
      web="https://todoapps-yanda.vercel.app/"
      image={todoapp}
    />
  );
};

export default Todo;
