import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';
import Banner from './Banner';
import InfoSection from './Info';
import PromoSection from './PromoSection';
import CaseStudies from './CaseStudies';
import PromoSection2 from './PromotionSection2';
import Footer from '../Footer/Footer';

function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const parsedLanguage = JSON.parse(savedLanguage);
      i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');
    }
  }, [i18n]);
  return (
    <>
      <Helmet><title>{t('Home.title')}</title></Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <InfoSection></InfoSection>
      <PromoSection></PromoSection>
      <CaseStudies></CaseStudies>
      <PromoSection2></PromoSection2>
      <Footer></Footer>
    </>
  )
}

export default Home