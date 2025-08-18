import React from "react";
import { Box, Card } from "@mui/material";
import Button from "./button";

export default function CharacterCard() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", minHeight: "300px", position: "relative", px: 2, py: 4 }}
    >
      {/* Left Brown Box */}
      <Card
        sx={{
          backgroundColor: "#ffffffff",
          borderRadius: "10px",
          flex: 1,
          minHeight: { xs: "130px", md: "180px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 3, md: 3 },
          color: "white",
          width: { xs: "90%", md: "50%" },
          marginTop: { lg: 18, xs: 10 },
          mb: { xs: 0, md: 0 },
          mr: { xs: 0, md: 6 },
          position: "relative", // Important for absolute positioning inside
        }}
      >
       <Box sx={{ position: "relative", 
        left:{sm: 0, md: 24 },
        right:{xs: 55},
        top:{xs: 40, md: 0}
        }}>
        <a href="resume_bikshu.pdf"> <Button
          sx={{
            position: "absolute",
            left: { xs: 10, md: 24 },
            top: "50%",
            transform: "translateY(-50%)", // Vertically center button
          }}
        /></a>
       </Box>
      </Card>

      {/* Character Image */}
      <Box
        component="img"
        src="./bikshu.png"
        alt="Character with laptop"
        sx={{
          width: { xs: "230px", md: "250px" },
          height: "auto",
          mt: { xs: 2, md: 0 },
          position: "absolute",
          marginLeft: { xs: 30 },
          right: { md: 20, xs: 0 },
          bottom: { md: 23, xs: 24 },
        }}
      />
    </Box>
  );
}
