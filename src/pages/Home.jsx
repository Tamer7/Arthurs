import React from 'react';

import Header from '../partials/Header';
import HeroPage from '../partials/Welcome';
import Testimonial from '../partials/Testimonials';
import Products from '../partials/Products';
import Services from '../partials/Services';
import Policy from '../partials/Policy';
import Footer from '../partials/Footer';

// import Portfolio from '../partials/Portfolio';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroPage/>
        <Testimonial/>
        <Products/>
        <Services/>
        <Policy/>


        {/* <Portfolio/> */}

      </main>

      {/*  Site footer */}
      <Footer/>

    </div>
  );
}

export default Home;