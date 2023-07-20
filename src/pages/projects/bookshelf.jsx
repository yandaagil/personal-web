import Layout from "../components/layout";
import bookshelfapp from "../../../public/bookshelfapp.png";

const Bookshelf = () => {
  return (
    <Layout
      title="Bookshelf App"
      desc="A very simple bookshelf app where you can store your read, made with HTML and JavaScript styled with Bootstrap. This is a learning outcome from Dicoding Academy."
      repo="https://github.com/yandaagil/bookshelf-app"
      web="https://bookshelf-app-yanda.vercel.app/"
      image={bookshelfapp}
    />
  );
};

export default Bookshelf;
