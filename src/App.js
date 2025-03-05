//MAHORO MPAKANYI Florien
//GITHUB:florien2208
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Welcome to My API App</h1>
          <div className="App-underline"></div>
        </header>
        <main className="App-main">
          <div className="App-profile">
          
            <p className="App-name">MAHORO MPAKANYI Florien</p>
            <p className="App-name1">mahorompakanyiflorien@gmail.com</p>
            <p className="App-name2">GitHub:florien2208</p>
           
          </div>
          <div className="App-features">
            <div className="App-feature">
              <h3>Fast</h3>
              <p>Optimized for performance</p>
            </div>
            <div className="App-feature">
              <h3>Secure</h3>
              <p>Enterprise-grade security</p>
            </div>
            <div className="App-feature">
              <h3>Scalable</h3>
              <p>Built for growth</p>
            </div>
          </div>
        </main>
        <footer className="App-footer">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Afritec
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
