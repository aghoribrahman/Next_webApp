/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/team/1.png';


const data = [
  {
    id: 1,
    slug: 'https://www.knocksense.com/indore/indore-city/the-monroe-in-indore-is-the-perfect-vegetarian-only-hangout-for-the-month-of-shraavana',
    thumbnail: thumb1,
    showDescription: true,
    title: `‘The Monroe’ in Indore is the perfect vegetarian only hangout for the month of Shraavana`,
    description: `The Monroe Cafe in New Palasia, Indore, is a rooftop cafe and restaurant in the city that has received much attention. The cafe is Madhya Pradesh’s first IOT, an IIT Operated Cafe, where calling the servers, asking for the bill or another drink can be done by a buzzer kept on the table. The concept is that it would send the servers directly to you without having to wait for them if they’re inside the kitchen or busy serving someone else. It would also cut all the yelling, “shhh shh”, “bhaiya” and “excuse me”s that we use to beckon the servers.`,
  },
  {
    id: 2,
    slug: 'https://yometro.com/travel-guide/attraction-the-monroe-indore',
    thumbnail: null,
    showDescription: false,
    title: `This is an LED themed gazebo-style rooftop cafe located near Chappan Dukan. It is a multi-cuisine meal that serves Chinese, Italian and vegetarian Indian cuisine.`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Popular blog post we update everyday"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click."
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
