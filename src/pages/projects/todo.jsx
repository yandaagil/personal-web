import Layout from "../components/layout";
import todoapp from "../../../public/todoapp.png";

const Todo = () => {
  return (
    <Layout
      title="Todo App"
      desc="A very simple to do list app made with HTML and JavaScript and styled with CSS. This is a learning outcome from Dicoding Academy."
      repo="https://github.com/yandaagil/todoapps"
      web="https://todoapps-yanda.vercel.app/"
      image={todoapp}
    />
  );
};

export default Todo;
