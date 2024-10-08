/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import uber from 'assets/images/team/1.png';
import google from 'assets/images/team/10.png';
import paypal from 'assets/images/team/5.png';
import microsoft from 'assets/images/team/11.png';
import dribbble from 'assets/images/team/23.png';
import SectionHeading from 'components/section-heading';
const data = [
  {
    id: 1,
    logo: uber,
    author: 'By Vinayak Goel, Via Zomato',
    quote: `“Absolutely gobsmacked on my first visit here. 
    The kind of food they are doing is unparalleled, definitely a first for Indore. 
    Highly recommended are the Goat Cheese Tikki, Kele ke Kebab, 
    Watermelon and Feta salad in Balsamic Vinaigrette.”`,
  },
  {
    id: 2,
    logo: google,
    author: 'By Shubham Jain Via Google Review',
    quote: `“Excellent resort for a night stay and celebrations. 
    The staff and team are efficient in what they do. 
    They do nice decors for you, Food is good too.
    Had a blast celebrating my wife's bday. 
    They did a nice decor for room and candlelight dinner, Location is good too`,
  },
  {
    id: 3,
    logo: paypal,
    author: 'By Anshul Tiwari',
    quote: `“Mstay provided an amazing getaway with top-notch amenities. 
    The farmhouse was perfect for a relaxing retreat!”`,
  },
  {
    id: 4,
    logo: microsoft,
    author: 'By Mohit Trivedi',
    quote: `“Fantastic experience with MYSTYK! They provided quick decoration help with fast service and a really friendly team.”`,
  },
  {
    id: 5,
    logo: dribbble,
    author: 'Shobit Mishra',
    quote: `“Peaceful property with a great ambiance. I had a fantastic time with my family. It's a wonderful staycation spot!”`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
      <SectionHeading
          sx={styles.heading}
          title={<h6 className="fade-in">Testimonials</h6>}
        />
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
       
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: ['50px', '65px', '75px', '110px', '80%', '50%'], // Responsive logo sizes

        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};