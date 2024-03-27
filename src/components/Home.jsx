import kabanImage from "../img/kabanImage.jpg";
import memeImage from "../img/memeGenerator.jpg";
import classAverage from "../img/classAverage.jpg";
import githubImage from "../img/github.png";

import Card from "./Card";

const Home = () => {
  return (
    // Add elements inside here to visually indicate that this
    // component is rendering
    // Your Home page should greet your user and explain your role
    // Refer to your original portfolio
    <main>
      <aside>
        <h3>
          {" "}
          <p id="roles">Hi, my name is Vinson. Check out my Work.</p>
        </h3>
      </aside>
      <article className="project">
        <div className="projectItem">
          <Card
            img={kabanImage}
            title="Kaban"
            tech="React | Tailwind"
            content="Drag and Drop Application"
            demoLink="https://kabanapp.netlify.app/"
            codeLink="https://github.com/vinson-han/Kaban"
          />
        </div>
        <div className="projectItem">
          <Card
            img={memeImage}
            title="Meme Generator"
            tech="React | CSS"
            content="React Single Page Application that generates Memes"
            codeLink="https://github.com/vinson-han/MemeGenerator"
          />
        </div>
        <div className="projectItem">
          <Card
            img={githubImage}
            title="Github Repo Search"
            tech="React | Tailwind | Express | MongoDB"
            content="Fullstack Application that allows you to search Github Repos"
            codeLink="https://github.com/vinson-han/githhub"
          />
        </div>
        <div className="projectItem">
          <Card
            img={classAverage}
            title="Class Average"
            tech="React | Tailwind"
            content="Class Average Calculation"
            codeLink="https://github.com/vinson-han/reactCalculateClassRoomAverage"
          />
        </div>
      </article>
    </main>
  );
};

export default Home;
