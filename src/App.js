import './App.css';
import Animation from './Animation';
import Portfolio from './Portfolio';
import Project from './Project';
import Work from './Work';
import Notice from './Notice';

function App() {
  return (
    <main>
      <Animation/>
      <Portfolio/>
      <Project/>
      <Work/>
      <Notice/>
      <aside id="contact">
        <h2 className="hidden">contact</h2>
      </aside> 
    </main>
  )
}

export default App;
