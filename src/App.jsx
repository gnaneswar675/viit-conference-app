import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialThemeSection from './components/SpecialThemeSection';
import KeyDatesSection from './components/KeyDatesSection';
import SubmissionSection from './components/SubmissionSection';
import PublicationsSection from './components/PublicationsSection';
import ExtendedPublicationSection from './components/ExtendedPublicationSection';
import TopicsSection from './components/TopicsSection';
import SpeakersSection from './components/SpeakersSection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import CommitteeSection from './components/CommitteeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header'; // Fixed import path
import './styles/style.css'; // Importing the CSS file for styles

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Navbar />
      <AboutSection />
      <SpecialThemeSection />
      
      <SubmissionSection />
      <PublicationsSection />
      <ExtendedPublicationSection />
      <TopicsSection />
      <KeyDatesSection />
      <SpeakersSection />
      <RegistrationSection />
      <FAQSection />
      <CommitteeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;