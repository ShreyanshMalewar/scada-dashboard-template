import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import MainCard from "../../Template/MainCard";

const Settings = () => {
  return (
    <Box
      height={600}
      width={1500}
      my={9}
      mx={20}
      display="flex"
      alignItems="center"
      gap={2}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      <MainCard
        title="Information Card - !!!"
        sx={{
          maxWidth: "80%", // Max width for the card
          width: "100%", // Make it responsive
          margin: "auto", // Center it horizontally if the container is wider than the card
        }}
      >
        <div>Info Content</div>
      </MainCard>
    </Box>
  );
};

export default Settings;
