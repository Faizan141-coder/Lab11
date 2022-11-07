import './App.css';

function App() {
  return (
    <div data-testid="comp" className="App">
      <h1> Hello World</h1>
      <List />
    </div>
    
  );
}

function List() {
  return (
    <div data-testid="list" className="App">
      <h1>Car</h1>
      <h1>Bus</h1>
      <h1>Train</h1>
    </div>
  );
}

export default App;