import kabanImage from "../img/kabanImage.jpg";

const Home = () => {
  return (
    // Add elements inside here to visually indicate that this
    // component is rendering
    // Your Home page should greet your user and explain your role
    // Refer to your original portfolio
    <main>
      <aside>
        <h3>Porttfolio Project</h3>
        <p id="roles">{}</p>
      </aside>

      <article className="project">
        <figure>
          <img
            src={kabanImage}
            // alt="Image of bubbles through a microscope."
          />
          <figcaption>
            <h2>KABAN</h2>
            <h3>React | Tailwind</h3>
            <p>Drag and Drop Kaban Application</p>
            <a href="https://kabanapp.netlify.app/">Demo</a> |
            <a href="https://github.com/vinson-han/toDO">Code</a>
          </figcaption>
        </figure>
      </article>
    </main>
  );
};

export default Home;
