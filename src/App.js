import './App.css';
import data from './data/contact.json';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout contacts={data} />
    </div>
  );
}

export default App;
