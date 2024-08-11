/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: 'https://www.indiamart.com/momkeen-by-mars/',
    title: 'Fine Dining Experiences',
    description: `Enjoy meals that aren’t just food but memorable experiences. My restaurants focus on creating delicious moments that feel both special and welcoming.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Student-Friendly Dining',
    description: `My goal is to create a space where students can relax, refuel, and enjoy good food without breaking the bank. At Mars Canteen, you’ll find meals that are affordable, tasty, and perfect for your busy schedule.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Luxury Farmhouse Rentals',
    description: `Escape to a place where comfort meets nature. My farmhouses offer the perfect blend of luxury and tranquility, making them ideal for a peaceful getaway or a special event.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'MEALSUP',
    description: `Mealsup offers a convenient and delicious thali, perfect for busy professionals. Enjoy a wholesome, balanced meal that fits seamlessly into your workday, delivering both taste and nutrition in every bite.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'M LABELING ',
    description: `M LABELING provides high-quality, customizable labels for water bottles that help your brand stand out. Whether for events, corporate giveaways, or retail, our labels are designed to leave a lasting impression.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'MYSTYK',
    description: `At MYSTYK, we specialize in creating stunning decor that brings your vision to life. Whether it’s a cozy home, a vibrant event, or a sophisticated office space, our designs add a touch of elegance and style to every setting.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Services You Must Explore"
          description="Focus only on the meaning, taking care of the design. As soon as the meeting end you can export in one click into your preferred."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
