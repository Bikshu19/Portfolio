import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

// Project Data
const projects = [
  {
    title: "AI Tools Directory",
    description:
      "A full-stack app (React + Tailwind + Express + MongoDB) to showcase and categorize AI tools. Includes search, filtering, and responsive design.",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    color: "#90EE90",
    github: "https://github.com/Bikshu19/AI-Tools-application.git",
  },
  {
    title: "Startup Application",
    description:
      "A startup application built with React and Tailwind, featuring an elegant UI, smooth interactions, and a well-structured design.",
    tags: ["React", "Tailwind", "UI/UX"],
    color: "#90EE90",
    github: "https://github.com/Bikshu19/startup-Application.git",
  },
  {
    title: "Conference Application",
    description:
      "An app for our college event built with React and Bootstrap. Showcases speakers, schedules, hotel booking, and location tracking.",
    tags: ["React", "Bootstrap", "Maps API"],
    color: "#90EE90",
    github: "https://github.com/Bikshu19/conference.git",
  },
{
  title: "Breaking News Application",
  description:
    "A real-time news app built with React, Tailwind, and Express.js, powered by the News API. Provides live headlines.",
  tags: ["React", "Tailwind", "Express", "News API"],
  color: "#90EE90",
  github: "https://github.com/Bikshu19/Breaking-News-Application.git",
},
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1f2937" }}
      >
        🚀 Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0 }}
            >
              <Card
                sx={{
                  backgroundColor: "#1f2937",
                  borderRadius: 3,
                  width: "100%",
                  height: "30%",       // keeps equal height
                  minHeight: 250,       // lock minimum height
                  maxWidth: 380,        // equal width
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: project.color,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white", mb: 2 }}>
                    {project.description}
                  </Typography>

                  {/* Tech Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.1)",
                          color: "white",
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ mt: "auto", p: 2 }}>
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "lightgray" }}
                    startIcon={<GitHubIcon />}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
