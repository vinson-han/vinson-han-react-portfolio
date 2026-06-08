import kabanImage from "../img/kabanImage.jpg";
import memeImage from "../img/memeGenerator.jpg";
import classAverage from "../img/classAverage.jpg";
import githubImage from "../img/github.png";
import google from "../img/GoogleMake.png";
import bolt from "../img/Bolt.png";
import note from "../img/NoteLM.png";
import anki from "../img/Anki.png";

import Card from "./Card";

const tools = [
  {
    num: "01",
    name: "Google Make",
    img: google,
    desc: "Automates vocabulary generation and logs words directly into Google Docs for easy access and ongoing review.",
  },
  {
    num: "02",
    name: "NotebookLM",
    img: note,
    desc: "Provides deep contextual analysis of topics, turning raw vocabulary lists into meaningful, structured insights.",
  },
  {
    num: "03",
    name: "Bolt.dev",
    img: bolt,
    desc: "Generates audio files and interactive hover images, enabling listening exercises and visual vocabulary reinforcement.",
    demoLink: "https://product-preorder-web-7a0a.bolt.host",
  },
  {
    num: "04",
    name: "Anki",
    img: anki,
    desc: "Spaced repetition app for memorization — though integration with interactive games remains an ongoing challenge.",
  },
];

const Home = () => {
  return (
    <main className="cs-main">

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero__inner">
          <span className="cs-hero__label">Case Study</span>
          <h1 className="cs-hero__title">
            Building a Language<br />
            Learning System<br />
            with AI
          </h1>
          <div className="cs-hero__meta">
            <span className="cs-hero__author">By Vinson Han</span>
            <span className="cs-hero__divider">—</span>
            <span className="cs-hero__tags">Language Learning &middot; AI &middot; Automation</span>
          </div>
        </div>
        <div className="cs-hero__accent" aria-hidden="true"></div>
      </section>

      {/* Case Study Body */}
      <article className="cs-body">

        {/* 01 — The Problem */}
        <section className="cs-section">
          <div className="cs-section__header">
            <span className="cs-section__num">01</span>
            <span className="cs-section__rule" aria-hidden="true"></span>
            <h2 className="cs-section__title">The Problem</h2>
          </div>
          <div className="cs-section__content">
            <p>
              The challenge with learning a new language is that it can easily become boring. Most of the time, learners are forced to rely on textbooks or premade content that doesn't feel engaging or relevant. When the material feels dull, motivation fades quickly, and starting can feel completely overwhelming.
            </p>
            <p>
              Even when excited to learn, the process often stalls on tedious details. Studying Japanese conjugation, grammar rules, and sentence patterns feels repetitive and uninspiring. These parts of the language are necessary, but going through them in the traditional way makes the whole experience feel heavy and frustrating. Finding ways to make learning interesting, interactive, and practical is the real challenge that often determines whether a learner sticks with it or gives up.
            </p>
          </div>
        </section>

        {/* 02 — The Solution */}
        <section className="cs-section">
          <div className="cs-section__header">
            <span className="cs-section__num">02</span>
            <span className="cs-section__rule" aria-hidden="true"></span>
            <h2 className="cs-section__title">The Solution</h2>
          </div>
          <div className="cs-section__content">
            <p>
              The solution is using ChatGPT and automating the process — sending topics of personal interest to generate the most common words and phrases. Instead of studying random vocab or boring lists, the focus stays on what actually matters. Generated words are sent to Google Docs for logging, keeping everything in one place for easy review.
            </p>
            <p>
              Using Bolt.dev, those words become audio files for listening practice, interactive hover images for visual reinforcement, and mini games for sentence-building and instant recall. This creates a feedback loop that keeps engagement high. Anki was also used for spaced repetition, though integrating it with the interactive game system remains an ongoing limitation.
            </p>
          </div>

          {/* Tools List */}
          <div className="cs-tools">
            <p className="cs-tools__heading">Tools Used</p>
            <ul className="cs-tools__list">
              {tools.map((tool) => (
                <li key={tool.num} className="cs-tool-item">
                  <span className="cs-tool-item__num">{tool.num}</span>
                  <div className="cs-tool-item__img-wrap">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="cs-tool-item__img"
                    />
                  </div>
                  <div className="cs-tool-item__info">
                    <h4 className="cs-tool-item__name">{tool.name}</h4>
                    <p className="cs-tool-item__desc">{tool.desc}</p>
                    {tool.demoLink && (
                      <a
                        href={tool.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-tool-item__demo"
                      >
                        View Demo →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 — The Results */}
        <section className="cs-section">
          <div className="cs-section__header">
            <span className="cs-section__num">03</span>
            <span className="cs-section__rule" aria-hidden="true"></span>
            <h2 className="cs-section__title">The Results</h2>
          </div>
          <div className="cs-section__content">
            <p>
              This approach saves significant time previously spent searching for learning material — which could take hours. Instead of hunting for resources, learning starts immediately. When content aligns with personal interest, engagement comes naturally without forcing motivation.
            </p>
            <p>
              Because topics are self-chosen, it becomes easier to enter a state of flow where everything feels connected and language rules start making sense organically. Patterns emerge, connections form, and words become memorable because they carry personal meaning. Over time, this builds habits that make language learning feel automatic rather than stressful — spending less time looking for resources, more time learning.
            </p>
          </div>
        </section>

        {/* 04 — Lessons Learned */}
        <section className="cs-section">
          <div className="cs-section__header">
            <span className="cs-section__num">04</span>
            <span className="cs-section__rule" aria-hidden="true"></span>
            <h2 className="cs-section__title">Lessons Learned</h2>
          </div>
          <div className="cs-section__content">
            <p>
              What was surprising: the flexibility to create different game types — mix-and-match, listening, audio, and image-drawing exercises. Combined with saving progress to databases and tracking learning over time, it starts to feel like a genuinely personalized system built around an individual's needs.
            </p>
            <p>
              What was difficult: refining the automation process required significant trial and error. Some steps didn't work as expected at first, and the system is still evolving. New improvements are constantly uncovered, sometimes requiring revisiting and rethinking parts of the workflow entirely. That iterative process is both challenging and rewarding — every tweak makes the system more efficient and better suited to the learning style.
            </p>
          </div>
        </section>

        {/* 05 — AI Disclosure */}
        <section className="cs-section cs-section--last">
          <div className="cs-section__header">
            <span className="cs-section__num">05</span>
            <span className="cs-section__rule" aria-hidden="true"></span>
            <h2 className="cs-section__title">AI Disclosure</h2>
          </div>
          <div className="cs-section__content cs-disclosure">
            <p>
              This project was built using Make to automate results into Google Docs and NotebookLM to create deeper analysis. Anki integration was not automatable, so manual input was required. Games were built with Bolt to maintain engagement with the material.
            </p>
            <p>
              AI helped streamline creating an MVP — turning imagination into reality quickly. ChatGPT was also used to help refine the writing in this case study.
            </p>
          </div>
        </section>

      </article>

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
