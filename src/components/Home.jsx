import kabanImage from "../img/kabanImage.jpg";
import memeImage from "../img/memeGenerator.jpg";
import classAverage from "../img/classAverage.jpg";
import githubImage from "../img/github.png";

import Card from "./Card";

const Home = () => {
  return (
    <main>
      <aside>
        <p id="roles">
          Hi, my name is Vinson. This is my Case-Study on building a Language Learning System with AI.
        </p>
      </aside>

      <section className="case-study">

        <h2>The Problem</h2>
        <p>
          The challenge with learning a new language is that it can easily become boring. Most of the time,
          we are forced to rely on textbooks or premade content that doesn’t feel engaging or relevant.
          When the material feels dull, it’s hard to stay motivated, and starting can feel completely overwhelming.
          Even when I’m excited to learn, the process often slows down because I have to focus on tedious details.
          For example, when I’m learning Japanese, studying things like conjugation, grammar rules, and sentence
          patterns feels repetitive and uninspiring. These parts are necessary, but the traditional approach makes
          the experience feel heavy and frustrating. Finding ways to make learning interesting, interactive, and
          practical is the real challenge.
        </p>

        <h2>The Solution</h2>
        <p>
          The solution is using ChatGPT and automating the process by sending topics you are interested in to
          learn the most common words and phrases.
        </p>

        <p>
          Instead of trying to study random vocab or boring lists, you focus on what you care about. You generate
          the common words from topics you are interested in and log them in Google Docs so everything is in one
          place. Then you use NotebookLM to deepen understanding of those topics.
        </p>

        <p>
          The goal is to tolerate ambiguity and create a system where words stick longer because you are actually
          interested in them, instead of forcing yourself to learn things that don’t feel useful.
        </p>

        <p>
          Using Bolt.dev, you can upload words and generate audio so you can listen and repeat at your own pace.
          You can also create interactive images for instant meaning recognition and build mini games to practice
          recall and sentence formation. This creates a feedback loop that keeps learning engaging.
        </p>

        <p>
          I previously used Anki, but I couldn’t integrate it into this system. It is great for memorization but not
          designed for interactive learning workflows.
        </p>

        <p>
          The system is about making learning active and personal. You are not just consuming content — you are
          building a system that grows with you based on your interests.
        </p>

        <h2>The Results</h2>
        <p>
          This saves a lot of time searching for learning material. Instead of spending hours looking for resources,
          you start learning immediately.
        </p>

        <p>
          Because the content is tied to your interests, it becomes easier to enter flow state and naturally absorb
          patterns instead of memorizing isolated words.
        </p>

        <p>
          Over time, this builds habits that make language learning feel more automatic and less stressful.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          What surprised me was how flexible the system became. I could create different types of learning games,
          track progress, and turn learning into a personalized system.
        </p>

        <p>
          The hardest part was refining automation. It took a lot of trial and error, and the system is still evolving.
        </p>

        <h2>AI Disclosure</h2>
        <p>
          This project used Make to automate data into Google Docs and NotebookLM. Bolt.dev was used for interactive
          learning games. ChatGPT was used to refine writing and assist in building the MVP.
        </p>

      </section>

      {/*
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
            demoLink="https://thememegenerators.netlify.app/"
            codeLink="https://github.com/vinson-han/MemeGenerator"
          />
        </div>

        <div className="projectItem">
          <Card
            img={githubImage}
            title="Github Repo Search"
            tech="React | Tailwind | Express | MongoDB"
            content="Fullstack Application that allows you to search Github Repos"
            codeLink="https://github.com/vinson-han/github"
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
      */}
    </main>
  );
};

export default Home;
