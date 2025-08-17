import React, { useEffect } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Image from '../components/Image';
import Textheading from '../components/textheading';
import Comp from '../components/comp';
import Projects from '../components/projects';
import Progress from '../components/progress';
import Cards from '../components/cards'; 
import Icon from '../components/icon';
import Like from '../components/like';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Obj from "../components/obj"

// Reusable animation props
const scrollAnim = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 }
};

function Landing() {

  // 👇 Force scroll-to-top on refresh/load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progressData = [
    [99, 'HTML', '#E4004B'],
    [98, 'CSS', '#FF714B'],
    [90, 'JavaScript(ES6+)', '#C71E64'],
    [85, 'React', '#4D2D8C'],
    [95, 'Node.js', '#3E0703'],
    [95, 'Express', '#154D71'],
    [90, 'Python', '#33A1E0'],
    [60, 'Flask', '#064232'],
    [80, 'MongoDB', '#FF9B00'],
    [70, 'MySQL', '#154D71'],
    [60, 'Git&GitHub', '#4D2D8C'],
    [50, 'Typescript', '#3E0703'],
    [80, 'Bootstrap', '#239BA7'],
    [70, 'Tailwind CSS', '#C71E64'],
    [80, 'Material UI', '#E4004B'],
    [95, 'RestFull API', '#FF9B00']
  ];

  return (
    <Box>
      <Container>

        {/* Navbar */}
        <motion.div {...scrollAnim}>
          <Navbar />
        </motion.div>

        {/* Heading */}
        <motion.div {...scrollAnim}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'absolute',
              top: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              mt: { xs: -5, sm: 2, md: 3 },
              fontSize: { xs: '1.4rem', sm: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            <Textheading />
          </Box>
        </motion.div>

        {/* Image */}
        <motion.div {...scrollAnim}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              top: '90%',
              left: '50%',
              transform: 'translateX(-50%)',
              mt: { xs: 45, sm: 30, md: 25 },
            }}
          >
            <Image />
          </Box>
        </motion.div>

        {/* Journey Section */}
        <motion.div {...scrollAnim}>
          <Box id="journey" sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Comp />
          </Box>
        </motion.div>

        {/* Projects Section */}
        <motion.div {...scrollAnim}>
          <Box id="projects">
            <Projects />
          </Box>
        </motion.div>
        <motion.div {...scrollAnim}>
          <Box sx={{ textAlign: 'center', mt: 2,mb:4 }}>
            <Typography variant="h4" fontWeight="bold" color='#1f2937'>
              📰Objectives
            </Typography>
          </Box>
        </motion.div>
        <motion.div {...scrollAnim}>
          <Box>
            <Obj/>
          </Box>
        </motion.div>


        {/* Tech Stack Section */}
        <motion.div {...scrollAnim}>
          <Box id="techstack" sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h4" fontWeight="bold" color='#1f2937'>
              📰Tech Stack
            </Typography>
          </Box>
        </motion.div>

        {/* Progress Grid */}
        <motion.div {...scrollAnim}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
              padding: '16px',
              width: '100%',
              height: 'auto',
            }}
          >
            <Grid
              container
              spacing={5}
              justifyContent="center"
              sx={{ maxWidth: '1200px', padding: '26px' }}
            >
              {progressData.map(([value, label, color], index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div {...scrollAnim}>
                    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
                      <Progress vu={[value, label, color]} />
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Achievements Section */}
        <motion.div {...scrollAnim}>
          <Box id="achievements" sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
            <Typography variant="h4" fontWeight="bold">
             🏆 Achievements
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction="row">
              <Cards />
            </Stack>
          </Box>
        </motion.div>
      </Container>

      {/* Bottom Section */}
      <Like postId="landingPage" />
      <Icon />
      <motion.div {...scrollAnim}>
        <Footer />
      </motion.div>
    </Box>
  );
}

export default Landing;
