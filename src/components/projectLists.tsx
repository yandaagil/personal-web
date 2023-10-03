import { StaticImageData } from "next/image";
import starwars from "@/images/starwars/starwars.png";
import todo from "@/images/todo/todoapp.png";
import bookshelfapp from "@/images/bookshelf/bookshelfapp.png";
import tictactoe from "@/images/tictactoe/tictactoe.png";
import thesocial from "@/images/thesocial/thesocial.png";
import { TechListType } from "./techIcons";

export type Project = {
  title: string;
  desc: string;
  slug: string;
  repo: string;
  web?: string;
  image?: StaticImageData
  team?: {
    name: string,
    link: string,
    role: string
  }[];
  stack: TechListType[];
}

export const projectLists = (): Project[] => {
  const lists: Project[] = [
    {
      title: "The Social",
      desc: "Collaborative work creating simple social media where the user can create a post, find posts by categories, and search posts. Built with Next.js and Prisma. Development is still in progress.",
      slug: "thesocial",
      repo: "https://github.com/yandaagil/thesocial",
      image: thesocial,
      team: [
        {
          name: "Ghozy Ikbar",
          link: "https://github.com/GhozyIkbarF",
          role: "Back End Developer"
        }
      ],
      stack: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"]
    },
    {
      title: "Inventory Management",
      desc: "A PHP native and MySQL-based inventory management application with features for adding incoming items, recording outgoing items, efficiently managing stock levels, and maintaining a comprehensive history of item movements for each product.",
      slug: "inventory",
      repo: "https://github.com/yandaagil/inventory-management",
      stack: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Star Wars",
      desc: "A React.js website that uses APIs to display information about Star Wars characters, planets, and films. Explore the Star Wars universe with ease and learn about your favorite characters, fascinating planets, and iconic films on a single platform.",
      slug: "starwars",
      repo: "https://github.com/yandaagil/star-wars",
      web: "https://star-wars-yanda.vercel.app/",
      image: starwars,
      stack: ["React.js"]
    },
    {
      title: "Todo App",
      desc: "A simple todo list application crafted using HTML, JavaScript, and Bootstrap. Users can effortlessly input a list of tasks along with their respective dates. As tasks are completed, they can be seamlessly moved to the 'Done' section. This user-friendly application streamlines task management and organization.",
      slug: "todo",
      repo: "https://github.com/yandaagil/todoapps",
      web: "https://todoapps-yanda.vercel.app/",
      image: todo,
      stack: ["HTML", "JavaScript", "Bootstrap"]
    },
    {
      title: "Bookshelf App",
      desc: "An intuitive book management application created using HTML, JavaScript, and Bootstrap. Users can easily add books, including their titles, publication years, and authors, and categorize them into either 'Read' or 'Unread' sections. This application simplifies book organization and tracking, enhancing the reading experience.",
      slug: "bookshelf",
      repo: "https://github.com/yandaagil/bookshelf-app",
      web: "https://bookshelf-app-yanda.vercel.app/",
      image: bookshelfapp,
      stack: ["HTML", "JavaScript", "Bootstrap"]
    },
    {
      title: "Tic~Tac~Toe",
      desc: "A basic tic-tac-toe game built using React.js and Vanilla CSS. This game features a history functionality, allowing players to step back to previous moves. Enjoy a classic gaming experience with the ability to track your gameplay and rewind to earlier turns in the match.",
      slug: "tictactoe",
      repo: "https://github.com/yandaagil/tic-tac-toe",
      web: "https://tic-tac-toe-yanda.vercel.app/",
      image: tictactoe,
      stack: ["React.js"]
    },
  ];
  return lists;
};
