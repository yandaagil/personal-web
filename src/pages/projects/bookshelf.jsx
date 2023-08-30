import Layout from "../components/projectDetail";
import bookshelfapp from "../../../public/bookshelfapp.png";

const Bookshelf = () => {
  return (
    <Layout
      title="Bookshelf App"
      desc="An intuitive book management application created using HTML, JavaScript, and Bootstrap. Users can easily add books, including their titles, publication years, and authors, and categorize them into either 'Read' or 'Unread' sections. This application simplifies book organization and tracking, enhancing the reading experience."
      repo="https://github.com/yandaagil/bookshelf-app"
      web="https://bookshelf-app-yanda.vercel.app/"
      image={bookshelfapp}
    />
  );
};

export default Bookshelf;
