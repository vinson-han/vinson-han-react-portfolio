function Card({ title, tech, content, demoLink, codeLink, img }) {
  return (
    <>
      <figure>
        <img
          src={img}
          // alt="Image of bubbles through a microscope."
        />
        <figcaption>
          <h2>{title}</h2>
          <h3>{tech}</h3>
          <p>{content}</p>
          {demoLink ? <a href={demoLink}>Demo</a> : " "}

          <a href={codeLink}>Code</a>
        </figcaption>
      </figure>
    </>
  );
}

export default Card;
