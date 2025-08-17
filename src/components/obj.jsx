import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const objectives = [
  {
    emoji: "🚀",
    title: "Career Growth",
    text: "Apply my coding and problem-solving skills to build impactful, scalable applications.",
  },
  {
    emoji: "🤝",
    title: "Collaboration",
    text: "Work with dynamic teams and contribute innovative ideas to meaningful projects.",
  },
  {
    emoji: "📚",
    title: "Continuous Learning",
    text: "Explore emerging technologies such as AI, cloud, and full-stack development.",
  },
  {
    emoji: "🌍",
    title: "Vision",
    text: "Leverage technology to make a positive difference globally.",
  },
  {
    emoji: "💡",
    title: "Innovation",
    text: "Think creatively and deliver modern solutions that solve real-world challenges.",
  },
  {
    emoji: "🧑‍💼",
    title: "Leadership",
    text: "Take initiative, mentor peers, and inspire teams to achieve shared goals.",
  },
];

export default function DescriptionAlerts() {
  return (
    <Stack
      sx={{ width: '80%', mx: 'auto' }}
      spacing={2}
    >
      {objectives.map((obj, index) => (
        <Alert key={index} severity="success" sx={{ borderRadius: 2 }}>
          <AlertTitle>
            {obj.emoji} {obj.title}
          </AlertTitle>
          {obj.text}
        </Alert>
      ))}
    </Stack>
  );
}
