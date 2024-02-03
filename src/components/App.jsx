import '../scss/App.scss';
import Filters from './Filters';
import List from './QuotesList';
import dataPhrases from '../data/phrases.json';
import { useState } from 'react';

function App() {
  const [phrases] = useState(dataPhrases);
  const [filterPhrase, setFilterPhrase] = useState('');
  const handleFilterPhrase = (filterValue) => {
    setFilterPhrase(filterValue);
  };
  const filteredPhrase = phrases.filter((phrase) =>
    phrase.quote.toLowerCase().includes(filterPhrase.toLowerCase())
  );
  return (
    <div>
      <header className="header">
        <section className="header-section">
          <h1>Frases de Friends</h1>
          <Filters handleFilterPhrase={handleFilterPhrase} />
        </section>
      </header>
      <main>
        <List phrases={filteredPhrase} />
      </main>
    </div>
  );
}

export default App;
