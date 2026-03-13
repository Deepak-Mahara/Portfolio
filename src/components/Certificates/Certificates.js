import './Certificates.css';

const Certificates = () => {
  const certificates = [
   <section class="certificates">

  <h2>📜 Certifications</h2>

  <div class="certificate">
    <h3>☁️ Cloud Computing – NPTEL</h3>
    <p>
      Completed certification in <strong>Cloud Computing</strong> through NPTEL, 
      gaining understanding of cloud architecture, virtualization, distributed 
      systems, and service models such as IaaS, PaaS, and SaaS. 
      Explored how scalable cloud infrastructure supports modern applications.
    </p>
  </div>

  <div class="certificate">
    <h3>🔢 Computational Theory: Language Principles & Finite Automata – Infosys</h3>
    <p>
      Learned core concepts of <strong>Theory of Computation</strong> including 
      formal languages, automata models, regular expressions, and finite automata. 
      Developed a strong theoretical foundation for understanding how compilers 
      and programming languages process and recognize patterns.
    </p>
  </div>

  <div class="certificate">
    <h3>💻 Data Structures and Algorithms – CipherSchools</h3>
    <p>
      Completed structured training focused on <strong>Data Structures and Algorithms</strong>. 
      Practiced solving algorithmic problems using concepts such as recursion, 
      dynamic programming, hashing, graphs, and complexity analysis while 
      implementing solutions in real coding scenarios.
    </p>
  </div>

  <div class="certificate">
    <h3>🌐 The Bits and Bytes of Computer Networking – Coursera</h3>
    <p>
      Gained foundational knowledge of <strong>computer networking</strong> including 
      network protocols, TCP/IP models, routing, DNS, and packet transmission. 
      Developed understanding of how internet communication works at both 
      theoretical and practical levels.
    </p>
  </div>

</section>
  ];

  return (
    <div className="certificates-container">
      <h1>Certificates</h1>
      <ul className="certificates-list">
        {certificates.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;