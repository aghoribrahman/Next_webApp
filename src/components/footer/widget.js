/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} sx={{ width: '15px', height: '15px', objectFit: 'contain' }} />}
            <Link path={path} label={label} variant="footer" sx={styles.link} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
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
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
    },
    link: {
      display: 'block', // Make each item a block element
      color: 'heading',
      transition: 'font-weight 0.3s ease',
      '&:hover': {
        fontWeight: 'bold', // Make link bold on hover
      },
      mb: 2, // Margin-bottom for spacing
    },
  },
};
