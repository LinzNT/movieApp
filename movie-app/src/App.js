import React from 'react';
import SearchMovies from './components/searchMovies';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1 className="title">React Movie Search</h1>
      </header>
      <main>
        <SearchMovies />
        <h4>This product uses the TMDb API but is not endorsed or certified by TMDb.</h4>
      </main>
    </div>
  );
}

export default App;
