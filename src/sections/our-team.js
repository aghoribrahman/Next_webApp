/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect, useMemo } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/team/1.png';
import avatar2 from 'assets/images/team/23.png';
import avatar3 from 'assets/images/team/19.png';
import avatar4 from 'assets/images/team/18.png';
import avatar5 from 'assets/images/team/17.png';
import avatar6 from 'assets/images/team/16.png';
import avatar7 from 'assets/images/team/15.png';
import avatar8 from 'assets/images/team/12.png';
import avatar9 from 'assets/images/team/4.png';
import avatar10 from 'assets/images/team/10.png';
import avatar11 from 'assets/images/team/8.png';
import avatar12 from 'assets/images/team/5.png';
import avatar13 from 'assets/images/team/11.png';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const teamData = [
  { id: 1, avatar: avatar1, name: 'Monroe By Mars', designation: 'Restaurant, Cafe and Canteen' },
  { id: 12, avatar: avatar12, name: 'Mstay', designation: 'Farmhouse and HomeStay Booking' },
  { id: 2, avatar: avatar2, name: 'Musk Meadow', designation: 'Farmhouse' },
  { id: 3, avatar: avatar3, name: 'Full Drink Energy', designation: 'Drink Company' },
  { id: 4, avatar: avatar4, name: 'MNET', designation: 'Software Company' },
  { id: 5, avatar: avatar5, name: "M'BIENCE", designation: 'Cafe' },
  { id: 6, avatar: avatar6, name: 'Mealansh', designation: 'Premium Dining' },
  { id: 7, avatar: avatar7, name: 'Mars Outdoor', designation: 'Catering' },
  { id: 8, avatar: avatar8, name: 'Matkalal', designation: 'FastFood', socialLinks: [{ name: 'twitter', link: 'http://twitter.com' }] },
  { id: 9, avatar: avatar9, name: 'MWATER', designation: 'Water Supply', socialLinks: [{ name: 'twitter', link: 'http://twitter.com' }] },
  { id: 10, avatar: avatar10, name: 'Maliblu', designation: 'Farmhouse', socialLinks: [{ name: 'twitter', link: 'http://twitter.com' }] },
  { id: 11, avatar: avatar11, name: 'Mirchi Nimbu', designation: 'Affordable Thali', socialLinks: [{ name: 'twitter', link: 'http://twitter.com' }] },
  { id: 13, avatar: avatar13, name: 'MYSTYK', designation: 'Decoration Service', socialLinks: [{ name: 'twitter', link: 'http://twitter.com' }] },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({ left: 0, top: 0 });

  const isEnd = swiperRef.current?.swiper?.isEnd;

  const updateCurrentIndex = () => {
    if (swiperRef.current?.swiper) {
      setCurrentIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
    updateCurrentIndex();
  };

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
    updateCurrentIndex();
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerOffset({
        left: containerRef.current.offsetLeft || 0,
        top: containerRef.current.offsetTop || 0,
      });
    }
  }, []);

  const breakpoints = useMemo(() => ({
    0: { slidesPerView: 1, spaceBetween: 0 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
    1601: { slidesPerView: 5, spaceBetween: 30 },
  }), []);

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="My Ventures"
          description="Build incredible Start-ups and pushed business towards Growth, Showcasing all platforms and Start-ups"
        />
      </Container>
      <Box sx={{ ml: currentIndex === 0 ? containerOffset.left : 0, ...styles.teamWrapper }}>
        {currentIndex !== 0 && (
          <button onClick={handlePrev} className="swiper-arrow swiper-arrow-left">
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button className="swiper-arrow swiper-arrow-right" onClick={handleNext}>
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamMember member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: '50%',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
