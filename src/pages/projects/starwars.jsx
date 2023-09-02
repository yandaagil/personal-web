import Layout from "../components/projectDetail";
import starwars from "../../images/starwars/starwars.png";

const StarWars = () => {
  return (
    <Layout
      title="Star Wars"
      desc="A React.js website that uses APIs to display information about Star Wars characters, planets, and films. Explore the Star Wars universe with ease and learn about your favorite characters, fascinating planets, and iconic films on a single platform."
      repo="https://github.com/yandaagil/star-wars"
      web="https://star-wars-yanda.vercel.app/"
      image={starwars}
    />
  );
};

export default StarWars;
