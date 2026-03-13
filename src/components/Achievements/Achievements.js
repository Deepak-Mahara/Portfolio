import './Achievements.css';

const Achievements = () => {
  const achievements = [
    <section class="achievements">
  <h2>🏆 Achievements</h2>

  <div class="achievement">
    <h3>💻 Solved 200+ Coding Problems</h3>
    <p>
      Solved over <strong>200 algorithmic problems</strong> across platforms like 
      <strong>LeetCode</strong> and <strong>HackerRank</strong>, focusing on optimized 
      implementations of <strong>Data Structures and Algorithms</strong>.  
      Practiced concepts such as recursion, dynamic programming, graphs, and 
      greedy approaches while improving problem-solving speed and analytical thinking.
    </p>
  </div>

  <div class="achievement">
    <h3>🚀 CipherThon 2.0 – Round 2 Qualifier</h3>
    <p>
      Qualified for <strong>Round 2 of CipherThon 2.0</strong>, demonstrating strong 
      algorithmic thinking and coding skills under competitive conditions. 
      Successfully solved challenging programming tasks and secured a 
      <strong>finalist position among competitive participants</strong>.
    </p>
  </div>

  <div class="achievement">
    <h3>⚡ Byte Bash Hackathon – Top 10 Finalist</h3>
    <p>
      Ranked among the <strong>Top 10 finalists</strong> in the Byte Bash Hackathon. 
      Collaborated on building a functional solution within limited time constraints, 
      showcasing strong <strong>problem-solving, development, and execution skills</strong> 
      in a competitive hackathon environment.
    </p>
  </div>

</section>
  ];

  return (
    <div className="achievements-container">
      <h1>Achievements</h1>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;