import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import MainCard from "../../Template/MainCard"; 

const Adjustment = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "contents",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh", // Use 100vh to make it cover the full viewport height
        padding: 1, // Or use theme.spacing for consistent spacing based on the theme
      }}
    >
      <MainCard
        title="Adjustment Card"
        sx={{
          maxWidth: "80%", // Max width for the card
          width: "100%", // Make it responsive
          margin: "auto", // Center it horizontally if the container is wider than the card
        }}
      >
        <Box justifyContent="center">
          <Box sx={{ display: "contents" }}>
            <MainCard title="Content Card">
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </MainCard>

            <Box justifyContent="center" sx={{ display: "contents" }}>
              <Skeleton
                animation="pulse"
                sx={{ bgcolor: "#079b6c" }}
                width={1450}
              />
              <Skeleton
                animation="pulse"
                variant="rounded"
                width={1450}
                height={240}
              />
              <Skeleton animation="wave" width={1450} />

            </Box>
          </Box>
        </Box>
      </MainCard>
    </Box>
  );
};

export default Adjustment;
