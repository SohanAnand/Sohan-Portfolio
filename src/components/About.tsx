import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Product Manager and{" "}
          <span className="about-highlight">AI-native product builder</span>{" "}
          with 4+ years shipping B2B SaaS enterprise products. I don't stop at
          strategy decks. I identify root causes, design solutions, and build
          them myself. I design{" "}
          <span className="about-highlight">RAG pipelines</span>, orchestrate{" "}
          <span className="about-highlight">multi-agent systems</span>, and ship{" "}
          <span className="about-highlight">AI-powered products</span>, including
          the <span className="about-highlight">AI assistant on this site</span>.
          I think with AI, reason with AI, build with AI, and understand how
          the systems work from architecture to output.
        </p>
      </div>
    </div>
  );
};

export default About;
