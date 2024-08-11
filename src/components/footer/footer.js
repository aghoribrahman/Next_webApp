/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container, Image, Heading } from 'theme-ui';
import { Link } from 'components/link';
import { menuItems } from './footer.data';
import { rgba } from 'polished';
import logo12 from '../../assets/images/logo12.png';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              <Image src={logo12} alt="Logo" />
            </Box>
            <Box sx={styles.terms}>
              <Link path="#!">Terms of use</Link>
              <Text as="span">|</Text>
              <Link path="#!">Privacy</Link>
            </Box>
            <Text as="p" sx={styles.copyright}>
              Copyright by {new Date().getFullYear()} Monroe, Inc
            </Text>
          </Box>
          
          {menuItems.map(({ id, title, items, path }) => (
            <Box key={id} sx={styles.footerWidget}>
              <Heading as="h4">{title}</Heading>
              <ul>
                {items.map(({ path, label, icon }, i) => (
                  <li key={i} sx={styles.menuItem}>
                    {icon && <Image src={icon} alt={label} sx={{ marginRight:'5px', width: '15px', height: '15px', objectFit: 'contain' }} />}
                    <Link path={path} label={label} variant="footer" sx={styles.link} />
                  </li>
                ))}
              </ul>
            </Box>
          ))}
          
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2',
    img: {
      maxWidth: ['200px', null, null, '100%'], // Reduce logo size for mobile
      height: 'auto', // Maintain aspect ratio
    },
  },
  terms: {
    display: ['flex'],
    gridColumn: '3/4',
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: [
      'center',
      null,
      'flex-start',
      'center',
      null,
      'flex-start',
    ],
    
    a: {
      color: 'heading',
      transition: 'font-weight 0.3s ease', // Smooth transition for font weight
      '&:hover': {
        fontWeight: 'bold', // Make link bold on hover
      },
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'center', 'left'],
  },
  footerWidget: {
    // Styles for the widget container
    mb: [4], // Margin-bottom for spacing between widgets
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
  
      padding: 0,
    },
  },
  menuItem: {
    display: 'flex', // Ensure items are displayed in a flex container
    alignItems: 'center', // Center align items
  },
  link: {
    display: 'block', // Make each item a block element
    color: 'heading',
    transition: 'font-weight 0.3s ease',
    '&:hover': {
      fontWeight: 'bold', // Make link bold on hover
    },
    
  },
};
