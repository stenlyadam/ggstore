import AOS from 'aos';
import { useEffect } from 'react';
import MainBanner from '../components/organisms/MainBanner';
import NavBar from '../components/organisms/Navbar';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Store';
import Footer from '../components/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
