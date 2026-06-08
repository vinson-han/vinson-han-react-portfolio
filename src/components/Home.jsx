import kabanImage from "../img/kabanImage.jpg";
import memeImage from "../img/memeGenerator.jpg";
import classAverage from "../img/classAverage.jpg";
import githubImage from "../img/github.png";
import google from "../img/GoogleMake.png";
import bolt from "../img/Bolt.png";
import note from "../img/NoteLM.png";
import anki from "../img/Anki.png"

import Card from "./Card";

const Home = () => {
  return (
    <main>
      <aside>
        <p id="roles">
          Hi, my name is Vinson. This is my Case-Study on building a Language Learning System with AI.
        </p>
      </aside>

       <article className="case-study">

        <h2>The Problem</h2>
        <p>
          The challenge with learning a new language is that it can easily become boring. Most of the time, we are forced to rely on textbooks or premade content that doesn’t feel engaging or relevant. When the material feels dull, it’s hard to stay motivated, and starting can feel completely overwhelming. Even when I’m excited to learn, the process often slows down because I have to focus on tedious details. For example, when I’m learning Japanese, studying things like conjugation, grammar rules, and sentence patterns feels repetitive and uninspiring. These parts of the language are necessary, but going through them in the traditional way makes the whole experience feel heavy and frustrating. It’s not that I don’t want to learn. I just struggle with how monotonous it can be. Finding ways to make learning interesting, interactive, and practical is the real challenge that often determines whether I stick with it or give up.
        </p>

        <h2>The Solution</h2>
        <p>
          The solution is using ChatGPT and automating the process, sending topics you are interested in to learn the most common words and phrases. Instead of trying to study random vocab or boring lists, you just focus on what you care about. You generate the common words of the topic you are interested in and send it to Google Docs to log the words. This way you have everything in one place and can always check back later without forgetting. Then you can use NotebookLM to get a deeper understanding of such topics. The goal is to tolerate ambiguity and create a system where words stick longer because you are actually interested in them, instead of forcing yourself to learn things that don’t feel useful. By using Bolt.dev as well, you upload the words you generate and create audio files so you can listen and repeat and hear it at your own pace. You can also make interactive images you can hover over and understand meaning right away, which makes learning more visual and fun. You can also make mini games with the words you learn, to get you making sentences and recall instantly. This creates an immediate feedback loop that keeps you engaged with language learning instead of getting bored or stuck. I used Anki, which is a spaced repetition app, but I could not find a way to integrate it with the game. That part felt like a limitation because Anki is good for memorization but not really built for interactive learning systems like this. The whole idea is to make learning something active and personal. You are not just copying or reading stuff from a book, you are creating your own system that grows as you grow. The words and phrases you learn are based on your own interest, so they are more likely to stick and feel natural when you actually use them. Over time, this method makes learning less stressful and more exciting. You also build tolerance for not understanding everything right away, and slowly the language starts to make sense on its own. This system is about making learning stick, making it fun, and keeping you curious while you get better at the language.
        </p>

        {/* Placeholder images under The Solution */}
        <div className="solution-images">
          <img src={google} alt="Solution placeholder 1" className="solution-img" />
          <img src={note} alt="Solution placeholder 2" className="solution-img" />
          <img src={bolt} alt="Solution placeholder 3" className="solution-img" />
          <img src={anki} alt="Solution placeholder 4" className="solution-img" />
        </div>

        <h2>The Results</h2>
        <p>
          This helps save a lot of time looking for material to learn from, which normally can take hours. Instead of spending your time searching for resources, you can start learning right away and hit the ground running. When the content is about things you care about, you are naturally more engaged and more invested in the process. You don’t feel like you are forcing yourself to study boring stuff that doesn’t stick. Because you are interested in the topics, it’s easier to get into a sense of flow where everything feels connected and the rules start making sense naturally. You can focus on practicing, exploring, and applying what you learn instead of just memorizing random words. Over time, this creates habits that make language learning feel more automatic and less stressful. You start to recognize patterns, make connections, and remember words more easily because they are meaningful to you. Ultimately, this approach is about making learning more efficient and enjoyable. You spend less time looking for resources and more time learning. You get into a rhythm where learning becomes fun, engaging, and sustainable, which helps you improve faster and stick with the language longer.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          What surprised me was how I can make different games to fit my needs, like mix-and-match games, listening and audio games, or even drawing images. On top of that, I can save progress to databases and track my learning over time, which makes it feel like a real personalized system. It’s exciting to see the tools I create helping me practice and remember things in ways that work for me. What was difficult was refining the automation process, which took a lot of time and trial and error. Some steps didn’t work the way I expected at first, and I had to keep adjusting and testing different approaches. I am still not completely done with the process because the system is still evolving. I keep finding ways to improve it, and sometimes that means going back and rethinking parts of the workflow. Even though it’s challenging, it’s also rewarding because every tweak makes the system more efficient and better suited to my own learning style.
        </p>

        <h2>AI Disclosure Statement</h2>
        <p>
          This project was built using Make to automate results into Google Docs and NotebookLM to create a deeper analysis. I couldn’t find a way to automate things into Anki, so I had to manually input them. I made games with Bolt to keep me engaged with the material. AI really helped me streamline making an MVP or proof of concept. It’s really good at helping turn what I imagine into reality. I also use ChatGPT to help me refine my writing.
        </p>

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
