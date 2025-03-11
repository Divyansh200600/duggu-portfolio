import React from 'react';

import Navbar from '@/components/Navbar';
import Home from '@/components/home';
import About from '@/components/about';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Work from '@/components/work';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

import ScrollToTop from '@/components/scrollButton';

function HomePage() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="work"><Work /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>

      <ScrollToTop />
    </div>
  );
}

export default HomePage;
