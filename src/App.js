import './App.css';
import Animation from './Animation';
import Portfolio from './Portfolio';
import Project from './Project';
import Work from './Work';
import Notice from './Notice';
import ContactUs from './ContactUs';

function App(): JSX.Element {
  return (
    <main>
      <Animation/>
      <Portfolio/>
      <Project/>
      <Work/>
      <Notice/>
      <ContactUs />
    </main>
  )
}

export default App;
