import React from "react";
import { Box } from "@mui/material";
import logo from "../assets/logo2.png";

const Logo = () => {
  return (
    <Box sx={{ marginTop:'10px'}}>
      <img src={logo} alt="AI" width="190" />
    </Box>
  );
};

export default Logo;
