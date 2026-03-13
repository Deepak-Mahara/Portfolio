import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Deepak Singh Mahara</h1>
          <p>
            Hi, I'm Deepak, an aspiring Software Developer with a strong interest in building scalable and efficient applications. I enjoy working across the full stack, developing interactive front-end interfaces and robust backend systems that solve real-world problems.
            </p>
          <button className="cta-button">Let's get started </button>
        </div>
        <div className="home-image">
          <img src="/photo.png" alt="Your Name" />
        </div>
      </div>
      <div className="additional-details">
        <h2>Passion</h2>
        <p>My passion lies in creating beautiful and functional web applications. I am driven by the challenge of solving complex problems and learning new technologies. I am always looking for opportunities to grow and improve my skills.</p>
        <h2>Interests</h2>
        <p>Besides coding, I enjoy photography, hiking, and reading. I believe that having a good work-life balance is important for creativity and productivity.</p>
        <h2>Soft Skills</h2>
        <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Adaptability</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;