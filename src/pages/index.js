import { useEffect, useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Muktansh Jain"
          description="Start-up Portfolio Of MUKTANSH JAIN"
        />
        <Banner />
        <Services />
        <Testimonials />
        <OurTeam />
        <OtherServices />
        <WhyUs />
        <Blog />
        <SubscribeUs />

        {isVisible && (
          <button style={styles.scrollToTopButton} onClick={scrollToTop}>
            ↑
          </button>
        )}
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  scrollToTopButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor:'#808080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
  },
};
