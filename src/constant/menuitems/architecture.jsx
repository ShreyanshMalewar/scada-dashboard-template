import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/material";
import MainCard from "../../Template/MainCard";

const architecture = () => {
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
      sx={{ border: "2px solid grey", bgcolor: "black" }}
    >
      <MainCard
        title="Main Structure of SPA"
        sx={{
          maxWidth: "100%", // Max width for the card
          width: "100%", // Make it responsive
          margin: "auto", // Center it horizontally if the container is wider than the card
        }}
      >
        <Card sx={{ maxWidth: "700", bgcolor: "lightgray" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="src/assets/device0.jpg"
              alt="System Understanding"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                System Information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The following power and control circuit diagram shows how to
                wire a VFD for speed control and changing the direction of
                rotation of three phase motor.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              See More
            </Button>
          </CardActions>
        </Card>

        {/* <Card sx={{ maxWidth: 737 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="src/assets/plc.png"
              alt="System Understanding"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PLC Diagram
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wiring a Variable Frequency Drive (VFD) is a fundamental skill
                in industrial automation and control systems. As a modern
                component, it facilitates precise regulation of an electric
                motor’s speed, torque, and direction by adjusting the frequency
                and voltage of the power supplied to the motor. In the following
                article, we will demonstrate how to wire and control a
                three-phase motor using VFD, external switches, and additional
                devices such as PLCs and PCs, with the help of power and control
                wiring diagrams.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              See More
            </Button>
          </CardActions>
        </Card> */}
      </MainCard>
    </Box>
  );
};

export default architecture;
