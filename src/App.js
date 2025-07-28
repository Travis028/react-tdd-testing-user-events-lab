import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [react, setReact] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [nodejs, setNodejs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const interests = [];
    if (react) interests.push('React');
    if (javascript) interests.push('JavaScript');
    if (nodejs) interests.push('Node.js');
    
    setSuccessMessage(`Thank you, ${name}! You're interested in ${interests.join(', ')}.`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <h1>Hi, I'm (your name)</h1>
        <img alt="My profile pic" src="https://via.placeholder.com/350" />
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <div>
          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>

        <h2>{successMessage}</h2>
      </main>
    );
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={react}
              onChange={(e) => setReact(e.target.checked)}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              checked={javascript}
              onChange={(e) => setJavascript(e.target.checked)}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              checked={nodejs}
              onChange={(e) => setNodejs(e.target.checked)}
            />
            Node.js
          </label>
        </div>

        <button type="submit">Subscribe</button>
      </form>
    </main>
  );
}

export default App;
