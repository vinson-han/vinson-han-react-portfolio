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
             The challenge with learning a new language is that it can easily become boring. Most of the time, we are forced to rely on textbooks or premade content that doesn’t feel engaging or relevant. When the material feels dull, it’s hard to stay motivated, and starting can feel completely overwhelming. Even when I’m excited to learn, the process often slows down because I have to focus on tedious details. For example, when I’m learning Japanese, studying things like conjugation, grammar rules, and sentence patterns feels repetitive and uninspiring. These parts of the language are necessary, but going through them in the traditional way makes the whole experience feel heavy and frustrating. It’s not that I don’t want to learn. I just struggle with how monotonous it can be. Finding ways to make learning interesting, interactive, and practical is the real challenge that often determines whether I stick with it or give up.
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
            The solution is using ChatGPT and automating the process, sending topics you are interested in to learn the most common words and phrases.
 

 Instead of trying to study random vocab or boring lists, you just focus on what you care about. You generate the common words of the topic you are interested in and send it to Google Docs to log the words. This way you have everything in one place and can always check back later without forgetting. Then you can use NotebookLM to get a deeper understanding of such topics. 
 

The goal is to tolerate ambiguity and create a system where words stick longer because you are actually interested in them, instead of forcing yourself to learn things that don’t feel useful.
By using Bolt.dev as well, you upload the words you generate and create audio files so you can listen and repeat and hear it at your own pace. You can also make interactive images you can hover over and understand meaning right away, which makes learning more visual and fun. You can also make mini games with the words you learn, to get you making sentences and recall instantly. This creates an immediate feedback loop that keeps you engaged with language learning instead of getting bored or stuck.
 

I used Anki, which is a spaced repetition app, but I could not find a way to integrate it with the game. That part felt like a limitation because Anki is good for memorization but not really built for interactive learning systems like this.
 

The whole idea is to make learning something active and personal. You are not just copying or reading stuff from a book, you are creating your own system that grows as you grow. The words and phrases you learn are based on your own interest, so they are more likely to stick and feel natural when you actually use them. Over time, this method makes learning less stressful and more exciting. You also build tolerance for not understanding everything right away, and slowly the language starts to make sense on its own. This system is about making learning stick, making it fun, and keeping you curious while you get better at the language.

          
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
            This helps save a lot of time looking for material to learn from, which normally can take hours. Instead of spending your time searching for resources, you can start learning right away and hit the ground running. When the content is about things you care about, you are naturally more engaged and more invested in the process. You don’t feel like you are forcing yourself to study boring stuff that doesn’t stick.
Because you are interested in the topics, it’s easier to get into a sense of flow where everything feels connected and the rules start making sense naturally. You can focus on practicing, exploring, and applying what you learn instead of just memorizing random words. Over time, this creates habits that make language learning feel more automatic and less stressful. You start to recognize patterns, make connections, and remember words more easily because they are meaningful to you.
Ultimately, this approach is about making learning more efficient and enjoyable. You spend less time looking for resources and more time learning. You get into a rhythm where learning becomes fun, engaging, and sustainable, which helps you improve faster and stick with the language longer.
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
            
            What surprised me was how I can make different games to fit my needs, like mix-and-match games, listening and audio games, or even drawing images. On top of that, I can save progress to databases and track my learning over time, which makes it feel like a real personalized system. It’s exciting to see the tools I create helping me practice and remember things in ways that work for me.
What was difficult was refining the automation process, which took a lot of time and trial and error. Some steps didn’t work the way I expected at first, and I had to keep adjusting and testing different approaches. I am still not completely done with the process because the system is still evolving. I keep finding ways to improve it, and sometimes that means going back and rethinking parts of the workflow. Even though it’s challenging, it’s also rewarding because every tweak makes the system more efficient and better suited to my own learning style.

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
