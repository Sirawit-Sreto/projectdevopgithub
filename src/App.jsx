import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="logo-group">
            <img src="80ku.png" className="App-logo" alt="logo" />
            <img src="pic.jpg" className="App-logo profile-img" alt="profile" />
          </div>

          <h1 className="title">
            GitHub Codespaces <span className="heart">♥️</span> React
          </h1>

          <div className="author-card">
            <p className="small">This web app written by</p>
            <h2 className="author-name">Sirawit Sreto</h2>
          </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;