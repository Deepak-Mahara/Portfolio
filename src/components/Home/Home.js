import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Deepak Singh Mahara</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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