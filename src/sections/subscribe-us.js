/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Checkbox, Label, Input as ThemeInput, Textarea } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
    setShowMessage(true);
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Box as="section" id="subscribe-us" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Get in touch with us"
            description="Fill out the form below and we'll get back to you as soon as possible."
          />
          {showMessage ? (
            <Box sx={styles.message}>
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </Box>
          ) : (
            <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
              <ThemeInput
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                mb={3}
              />
              <ThemeInput
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                mb={3}
              />
              <ThemeInput
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                mb={3}
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                mb={3}
              />
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  form: {
    display: 'grid',
    gap: 3,
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
    },
  },
  message: {
    textAlign: 'center',
    padding: '40px 0',
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    p: {
      fontSize: '16px',
      color: '#666',
    },
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};