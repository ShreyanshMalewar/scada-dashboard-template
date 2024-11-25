import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Divider,
} from "@mui/material";
import MainCard from "../../Template/MainCard";                                         
import { useDispatch } from "react-redux";
import { addAlarm } from "../store/alarmSlice";

const Dashboard = () => {
  
  const dispatch = useDispatch();

  const handleCauseClick = (causeName, eventName) => {
    
    dispatch(addAlarm({causeName, eventName}));
  };

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        padding: 1,
      }}
    >
      <MainCard
        title="Recipe Administration"
        sx={{
          maxWidth: 1300, // Adjust the max-width as per your design
          width: "180vh",
          margin: 8,
        }}
      >
        {/* Sub Card - Event 1 */}
        <Card
          variant="outlined"
          style={{
            marginTop: "5px",
            borderBottom: "2px solid #3f51b5",
            paddingBottom: "8px",
          }}
          title="Event 1"
          sx={{ backgroundColor: "#364152", color: "#fff" }}
          gutterBottom
        >
           <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Main Pannel Emergency 1
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Main Panel Emergency 1')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Main Panel Emergency 1')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Main Panel Emergency 1')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Main Panel Emergency 1')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Main Panel Emergency 1')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Main Panel Emergency 1')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 2 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 2"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Safety Relay 1 Not Healthy
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Safety Relay 1 Not Healthy')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Safety Relay 1 Not Healthy')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Safety Relay 1 Not Healthy')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Safety Relay 1 Not Healthy')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Relay 1 Not Healthy')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Safety Relay 1 Not Healthy')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 3 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 3"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Safety Relay 2 Not Healthy
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Safety Relay 2 Not Healthy')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Safety Relay 2 Not Healthy')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Safety Relay 2 Not Healthy')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Safety Relay 2 Not Healthy')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Relay 2 Not Healthy')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Safety Relay 2 Not Healthy')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 4 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 4"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Safety Door 1 Open
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Safety Door 1 Open')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Safety Door 1 Open')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Safety Door 1 Open')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Safety Door 1 Open')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Door 1 Open')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Safety Door 1 Open')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 5 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 5"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Field Emergency 2
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Field Emergency 2')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Field Emergency 2')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Field Emergency 2')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Field Emergency 2')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 2')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Field Emergency 2')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 6 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 6"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Field Emergency 3
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Field Emergency 3')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Field Emergency 3')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Field Emergency 3')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Field Emergency 3')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 3')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Field Emergency 3')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
      {/* Sub Card - Event 7 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 7"
        gutterBottom
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Field Emergency 4
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Field Emergency 4')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Field Emergency 4')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Field Emergency 4')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Field Emergency 4')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 4')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Field Emergency 4')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 8 */}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#364152', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
            Field Emergency 5
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('mechanicalDamage', 'Field Emergency 5')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('humanInterface', 'Field Emergency 5')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('maintenance', 'Field Emergency 5')}>
                Cause 3
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('emergencyMistake', 'Field Emergency 5')}>
                Cause 4
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 5')}>
                Cause 5
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('stuckPallet', 'Field Emergency 5')}>
                Cause 6
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>


      {/* Sub Card - Event 1.1*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Main Panel Emergency 2
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Main Panel Emergency 2')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Main Panel Emergency 2')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Main Panel Emergency 2')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.2*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Unloading Robot Emergency Stop          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Unloading Robot Emergency Stop')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Unloading Robot Emergency Stop')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Unloading Robot Emergency Stop')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

{/* Sub Card - Event 1.3*/}
<Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
Safety Door 1 Open          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Safety Door 1 Open')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Safety Door 1 Open')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Door 1 Open')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.4*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Safety Door 2 Open          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Safety Door 2 Open')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Safety Door 2 Open')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Door 2 Open')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.5*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Field Emergency 2          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Field Emergency 2')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Field Emergency 2')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 2')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.6*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Field Emergency 4          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Field Emergency 4')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Field Emergency 4')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Field Emergency 4')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.7*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Servo Panel Emergency
          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Servo Panel Emergency')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Servo Panel Emergency')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Servo Panel Emergency')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.8*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Safety Relay 2 Not Healthy          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Safety Relay 2 Not Healthy')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Safety Relay 2 Not Healthy')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Safety Relay 2 Not Healthy')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      {/* Sub Card - Event 1.9*/}
      <Card
        variant="outlined"
        style={{ marginTop: '25px', borderBottom: '2px solid #3f51b5', paddingBottom: '8px' }}
        title="Event 8"
        gutterBottoms
        sx={{ backgroundColor: '#264179', color: '#fff' }}
      >
        <CardContent>
          <Typography variant="h5" component="div" style={{ fontSize: '1 rem' }} sx={{ color: 'white' }}>
          Loading Robot Emergency Stop          </Typography>
          <Divider variant="fullwidth" sx={{ marginTop: '10px' }} />
          {/* Buttons */}
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="warning" onClick={() => handleCauseClick('maintenance', 'Loading Robot Emergency Stop')}>
                Cause 1
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="info" onClick={() => handleCauseClick('ocdoor', 'Loading Robot Emergency Stop')}>
                Cause 2
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="outlined" color="error" onClick={() => handleCauseClick('unexpectedActivity', 'Loading Robot Emergency Stop')}>
                Cause 3
              </Button>
            </Grid>
            {/* <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" onClick={handleResetClick}>
                Reset Alarms
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>

    </MainCard>
    </Box>
  );
};

export default Dashboard;