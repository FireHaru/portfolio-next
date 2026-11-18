import Hero from './Hero.jsx';
import Portfolio from './Portfolio.jsx';
import ContactForm from './ContactForm.jsx';
import { Achievements, Community, Skills } from './Experience.jsx';
import Repositories from './Repositories.jsx';
import BackToTop from './BackToTop.jsx';

export default function App() {
  return(
    <>
      <main className="container">
        <Hero />
        <Skills />
        <Portfolio />
        <Community />
        <Achievements />
        <Repositories />
        <ContactForm />
      </main>
      <BackToTop />
    </>
  );
}
