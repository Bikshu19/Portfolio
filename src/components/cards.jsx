import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const cardData = [
  {
    title: '🏆 1st Prize – Coding Competition (RK College)',
    image: './1st.jpg',
    description: "“Secured 1st place in the Coding Competition at RK College, showcasing problem-solving and programming skills.Recognized among peers for innovation, accuracy, and speed in developing efficient solutions”",
  },
  {
    title: '🎤 2nd Prize – PowerPoint Presentation (RK College)',
    image: './2nd.jpg',
    description:
      "“Won second prize in a competitive PowerPoint presentation event.Recognized for clear communication, creative storytelling, and impactful design skills.”",
  },
  {
    title: '🎉 2nd Prize – Coding with Seniors (Team Event)',
    image: './3rd.jpg',
    description:
      '“Secured second place in a collaborative coding competition alongside seniors.Appreciated for teamwork, technical contribution, and innovative problem-solving.”',
  },
  {
    title: '🎉 Participation In CodeSpark',
    image: './4th.jpg',
    description: "“Participated in Code Spark India 2025, a two-day national-level coding and innovation hackathon at KBN College, Vijayawada. Gained hands-on experience in problem-solving, programming, and collaborative innovation”",
  }
];

export default function ActionAreaCard() {
  return (
    <Box>
      {/* Centered Heading */}

      {/* Cards Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"   // centers cards horizontally
        alignItems="stretch"      // makes cards equal height in row
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
