import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppBar from "@mui/material/AppBar";

import MainCard from "../../Template/MainCard";

const Manualaction = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <AppBar position="relative" my={2} sx={{ width: "100%",bgcolor:"black" }}>
      <Box
        mx={8}
        sx={{
          border: "2px solid grey",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "85vh",
          bgcolor: "black",
          maxWidth: 1800, // Max width for the card
          width: "200vh", // Make it responsive        
        }}
      >

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
            <TabList
              onChange={handleChange}
              aria-label="Machine Line Tab"
              variant="fullWidth"
              centered
            >
              <Tab label="Line 1" value="1" sx={{ color: "white" }} />
              <Tab label="Line 2" value="2" sx={{ color: "white" }} />
              <Tab
                label="Empty Pallet Section"
                value="3"
                sx={{ color: "white" }}
              />
              <Tab
                label="Pusher Shuttle Section"
                value="4"
                sx={{ color: "white" }}
              />
              <Tab
                label="Dumbling & Scissor Conv"
                value="5"
                sx={{ color: "white" }}
              />
              <Tab
                label="LAOD Plate Section"
                value="6"
                sx={{ color: "white" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            Item One MUI X Data Grid A fast and extendable react data table and
            react data grid. It's a feature-rich component available in MIT or
            Commercial versions. The component leverages the power of React and
            TypeScript, to provide the best UX while manipulating an unlimited
            set of data. It comes with an intuitive API for real-time updates,
            accessibility, as well as theming and custom templates, all with
            blazing fast performance.
          </TabPanel>
          <TabPanel value="2">Item 2 Two</TabPanel>
          <TabPanel value="3">
            It's a feature-rich component available in MIT or Commercial
            versions. The component leverages the power of React and TypeScript,
            to provide the best UX while manipulating an unlimited set of data.
            It comes with an intuitive API for real-time updates, accessibility,
            as well as theming and custom templates, all with blazing fast
            performance.
          </TabPanel>
          <TabPanel value="4">Item 4 Four</TabPanel>
          <TabPanel value="5">
            The component leverages the power of React and TypeScript, to
            provide the best UX while manipulating an unlimited set of data. It
            comes with an intuitive API for real-time updates, accessibility, as
            well as theming and custom templates, all with blazing fast
            performance.
          </TabPanel>
          <TabPanel value="6">Item 6 Content</TabPanel>
        </TabContext>
      </Box>
    </AppBar>
  );
};

export default Manualaction;

//   <MainCard
//     sx={{
//       maxWidth: 1500, // Max width for the card
//       width: "160vh", // Make it responsive
//       margin: 2, // Center it horizontally if the container is wider than the card
//     }}
//   >
//   </MainCard>

// {
// <Box
// variant="fullWidth"
// sx={{
//   width: "180%",
//   border: "2px solid grey",
//   display: "block",
//   justifyContent: "center",
//   alignItems: "center",
//   minHeight: "80vh",
//   padding: 2,
//   bgcolor: "black",
// }}
// > 
// }
