/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';
import { useEffect } from 'react';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Restaurants',
    description: `Welcome to my culinary world, 
    where passion meets innovation. 
    At Monroe Cafe, Mars Canteen, and Mars Outdoor Catering, 
    we offer unforgettable dining experiences for all tastes and occasions, 
    with a commitment to quality and creativity in every dish.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Real Estate',
    description: `Through Mstay, I offer luxurious farmhouses 
    that redefine comfort. Nestled in tranquil settings, 
    these properties are perfect for relaxing getaways or memorable events, 
    featuring top-notch amenities and personalized services for an unparalleled escape from the ordinary.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Export',
    description: `As the founder of MOMKEEN, 
    I proudly export premium spices and namkeen 
    that embody Indian cuisine's rich flavors. 
    My goal is to share India’s essence globally, 
    ensuring every product meets the highest standards of authenticity and excellence.`,
  },
];

const Services = () => {
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
        animation: fadeIn 0.5s forwards; /* Animation */
      }

      .delay-1 {
        animation-delay: 0.2s; /* Delay for first text */
      }

      .delay-2 {
        animation-delay: 0.4s; /* Delay for second text */
      }

      .delay-3 {
        animation-delay: 0.6s; /* Delay for third text */
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
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={<h2 className="fade-in">Three Sectors Where I Provide Services</h2>}
          description={<p className="fade-in delay-1">My Three Domain</p>}
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item, index) => (
            <Service
              key={item.id}
              item={{
                ...item,
                title: (
                  <h3 className={`fade-in delay-${index + 1}`}>{item.title}</h3>
                ),
                description: (
                  <p className={`fade-in delay-${index + 1}`}>{item.description}</p>
                ),
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
