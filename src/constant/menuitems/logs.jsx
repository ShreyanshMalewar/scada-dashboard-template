import React from "react";
import {
  Typography,
  CardMedia,
  Grid,
  Box,
  List,
  ListItem,
  Divider,
  Button,
  ButtonGroup,
} from "@mui/material";
import MainCard from "../../Template/MainCard";
import Machine from "../../assets/device.png";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

const getTimeStamp = () => {
  const now = new Date();
  return {
    time: now.toLocaleTimeString(),
    date: now.toLocaleDateString(),
  };
};

const buttons = [
  <Button color="secondary" key="one">
    Resolve
  </Button>,
  <Button key="two" color="warning">
    Reset
  </Button>,
  <Button key="three">
    Discard
    </Button>,
];

const Logs = () => {
//   const alarms = useSelector((state) => state.alarms.alarms); // Accessing the full list of alarms
//   const selectedAlarmId = useSelector((state) => state.alarms.selectedAlarm); // The unique identifier of the selected alarm
  
//  // Find the full alarm details using the selectedAlarmId
// const selectedAlarmDetails = alarms.find(alarm => alarm.id === selectedAlarmId);
  
  
//   const currentAlert = useSelector((state) => state.alert.currentAlert);

  return (
    <Box
      sx={{
        margin: 11,
        border: "2px solid grey",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        height: "82vh",
        padding: 1,
      }}
    >
      <MainCard
        title="Alarm Message"
        sx={{
          maxWidth: 1500, // Adjust as per your layout
          height: "auto",
          width: "170vh",
          margin: 1,
        }}
      >
        <Box sx={{ width: "100%", display: "contents" }}>
          
            <Box mb={2} justifyContent="center">
              <Alert
                variant="filled"
                severity='error'
                sx={{ color: "black" }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Box
                      component="span"
                      sx={{ display: "block", marginRight: "20px" }}
                    >
                      f
                    </Box>
                  </Box>
                </Box>
              </Alert>
            </Box>

            <div>There Was An Alert Crash</div>
        
        </Box>

        <Typography variant="h3" color="error" sx={{ marginTop: "15px" }}>
          Alert
        </Typography>

        <Divider
          variant="fullWidth"
          sx={{ height: 2, backgroundColor: "gray", marginTop: "10px" }}
        />

        <Box sx={{ flexGrow: 1, p: 1, marginTop: "15px" }}>
        
          <Grid
            container
            spacing={2}
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                alt="Device Image"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  marginTop: "16px",
                }}
                height="300" // Adjust height as needed
                image={Machine}
                title="Device Image"
              />
            </Grid>

            {/* Information Section */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              
              {/* Description */}
              <Typography variant="h5" gutterBottom>
                Description - Cause of Error/Warning
              </Typography>
              <List>
                <ListItem>
    h
                </ListItem>
                {/* Add more list items for description */}
              </List>

              {/* Operator Instructions */}
              <Typography variant="h5" gutterBottom sx={{ marginTop: "16px" }}>
                Operator Instructions - Troubleshooting
              </Typography>
              <List>
                <ListItem>
- d
                </ListItem>
                {/* Add more list items for instructions */}
              </List>

              {/* Links */}
              <Typography variant="h5" gutterBottom sx={{ marginTop: "16px" }}>
                Links
              </Typography>
              <Typography variant="body1">
                <a href="/src/views/help">Supportive Document 1</a>
              </Typography>
              {/* Add more links */}

              <Typography variant="h5" gutterBottom sx={{ marginTop: "16px" }}>
                Action
              </Typography>
              <ButtonGroup
                variant="contained"
                aria-label="medium secondary button group"
              >
                {buttons}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </Box>
  );
};
export default Logs;

// alerts.js
export const alerts = [
  {
    severity: "error",
    message: "This is an Error - alert",
  },
  {
    severity: "warning",
    message: "This is a Warning - alert",
  },
  {
    severity: "info",
    message: "This is an Info - alert",
  },
  {
    severity: "success",
    message: "This is a Success - alert",
  },
];
