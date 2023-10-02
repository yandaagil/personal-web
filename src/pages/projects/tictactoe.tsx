import ProjectDetailLayout from "@/components/projectDetail";
import tictactoe from "@/images/tictactoe/tictactoe.png";

const TicTacToe = () => {
  return (
    <ProjectDetailLayout
      title="Tic~Tac~Toe"
      desc="A basic tic-tac-toe game built using React.js and Vanilla CSS. This game features a history functionality, allowing players to step back to previous moves. Enjoy a classic gaming experience with the ability to track your gameplay and rewind to earlier turns in the match."
      repo="https://github.com/yandaagil/tic-tac-toe"
      web="https://tic-tac-toe-yanda.vercel.app/"
      image={tictactoe}
    />
  );
};

export default TicTacToe;
