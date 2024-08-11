/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';

import backgroundImage from 'assets/images/background-image.png'; 
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    // CSS for animations
    const css = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in {
        opacity: 0; /* Initial state */
        animation: fadeIn 1s forwards; /* Animation */
      }

      .delay-1 {
        animation-delay: 0.2s; /* Delay for title */
      }

      .delay-2 {
        animation-delay: 0.4s; /* Delay for description */
      }
    `;

    // Insert CSS into the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    // Cleanup function to remove the style when the component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title={<h2 className={`fade-in delay-1`}>Creativity starts with viewing the whole world differently</h2>}
            description={<p className={`fade-in delay-2`}>Welcome to Muktansh Jain's official website. 
            Explore my ventures in culinary, real estate, 
            and exports, including MOMKEEN spices, Mstay farmhouses, 
            and dining experiences with Monroe cafe & restaurant focused on quality and innovation.</p>}
          />
          <Box as="figure" sx={styles.illustration}>
            <img src={backgroundImage} alt="Illustration" sx={styles.image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: `''`,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '72px',
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', null, null, 'row'],
    justifyContent: 'space-between',
  },
  heading: {
    color: '#000', // Set text color to dark black
    mb: [30],
    maxWidth: [null, null, null, 700, 560, 930],
    textAlign: ['center', null, null, 'left'],
    flex: ['0 0 50%'],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
      maxWidth: [null, null, null, 700, 560, 730],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'], // Show on larger screens
    position: 'relative',
    flex: ['0 0 50%'],
    animation: 'fadeIn 1s forwards', // Fade-in animation for the illustration
  },
  image: {
    maxWidth: ['80%', null, null, '70%'],
    ml: '10%', // Align image to the right
    opacity: 0, // Start with opacity 0
    animation: 'fadeIn 1.0s forwards', // Fade-in animation for the image
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
};
