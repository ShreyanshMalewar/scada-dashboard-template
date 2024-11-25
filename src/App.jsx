import React, { useState, useEffect } from "react";
// material-ui
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Typography,
  Avatar,
  ListItemAvatar,
  Badge,
  colors,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./admin/accountmenu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Logo from "./assets/logo";
//Bottom navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// Icons List
import ListAltIcon from "@mui/icons-material/ListAlt";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import PolicyIcon from "@mui/icons-material/Policy";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import Notifications from "../src/event/notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TuneIcon from "@mui/icons-material/Tune";
import SwipeIcon from "@mui/icons-material/Swipe";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Language from "./layout/language";
import CustomNavigationBar from "./layout/navbar";
// import MenuItems from "./routes/menu";
// import User from "./appbar/user";
// import Skeleton from "@mui/material/Skeleton";
// import MainCard from "./skel/MainCard";
import Diagnose from "../src/constant/menuitems/diagnose";
import Manualaction from "../src/constant/menuitems/manualaction";
import Dashboard from "../src/constant/menuitems/dashboard";
import Adjustment from "../src/constant/menuitems/adjustment";
import Settings from "../src/constant/menuitems/settings";
import Architecture from "../src/constant/menuitems/architecture";
import Logs from "../src/constant/menuitems/logs";
import Info from "../src/constant/menuitems/info";
import MainContentPage from "./mainsample";
import Register from "./authentication/register";
import Login from "../src/admin/login";
import Layout from '../src/routes/layout';


const getTimeStamp = () => {
  const now = new Date();
  return {
    time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    date: now.toLocaleDateString([], {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
};

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {

  // HANDLE DRAWER OPEN AND CLOSE
  const [openDrawer, setOpenDrawer] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
  };

  //DATE & TIME LOGIC
  const [time, setTime] = useState(getTimeStamp().time);
  const [date, setDate] = useState(getTimeStamp().date);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeStamp().time);
      setDate(getTimeStamp().date);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // //SIDEBAR MENU ITEMS
  const menuitems = [
    {
      id: "DashSection1",
      title: "Alarm Systems",
      caption: "Manage Alarm",
      type: "group",
      children: [
        {
          id: "Diagnosis",
          title: "Diagnose",
          type: "item",
          to: "/diagnose",
          icon: PolicyIcon,
          breadcrumbs: false,
        },
        {
          id: "Operations",
          title: "Manual Action",
          type: "item",
          to: "/manualaction",
          icon: SwipeIcon,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "DashSection2",
      title: "Alarm Supervise",
      caption: "Control Board",
      type: "group",
      children: [
        {
          id: "Console",
          title: "DashBoard",
          type: "item",
          to: "dashboard",
          icon: TireRepairIcon,
          breadcrumbs: false,
        },
        {
          id: "Operate",
          title: "Adjustment",
          type: "item",
          to: "adjustment",
          icon: TuneIcon,
          breadcrumbs: false,
        },
        {
          id: "Repair",
          title: "Settings",
          type: "item",
          to: "/settings",
          icon: SettingsOutlinedIcon,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "DashSection3",
      title: "Alarm Handle",
      caption: "Support & Guide",
      type: "group",
      children: [
        {
          id: "Diagram",
          title: "Architecture",
          type: "item",
          to: "/architecture",
          icon: AccountTreeIcon,
          breadcrumbs: false,
        },
        {
          id: "Records",
          title: "Logs",
          type: "item",
          to: "/logs",
          icon: ListAltIcon,
          breadcrumbs: false,
        },
        {
          id: "Reports",
          title: "Info",
          type: "item",
          to: "/info",
          icon: InfoIcon,
          breadcrumbs: false,
        },
      ],
    },
  ];

  const AuthenticationRoutes = {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/authentication/login',
        element: <Login />
      },
      {
        path: '/authentication/register',
        element: <Register />
      }
    ]
  };

  // const theme = useTheme();
  const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);


  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />

        {/* APP BAR */}
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#164a41" }}
          variant="dense"
        >
          <Toolbar sx={{ bgcolor: "default.primary" }}>
            {/* LOGO */}
            <Logo />

            {/* Heading */}
            <Box sx={{ pl: 2 }}>
              <Typography variant="h6" component="div">
                WEB HMI
              </Typography>
            </Box>

            {/* Color Mode */}
            <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
              <IconButton
                sx={{ p: 2 }}
                // onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>

            {/* LOGIN*/}
            <Box>
              <AccountMenu />
            </Box>

            {/* LANGUAGE ICON */}
            <Box>
              <Language />
            </Box>

            {/* TIME & DATE */}
            <Box sx={{ flexGrow: 0, marginleft: "auto", pr: 2, pl: 2 }}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                {time}
              </Typography>
              <Typography variant="subtitle2">{date}</Typography>
            </Box>

            {/* NOTIFICATIONS */}
            <Notifications />

            {/* Drawer Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ ml: 1 }}
            >
              <ListItemAvatar sx={{ mt: 0 }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...(theme.typography.commonAvatar || {}),
                    ...(theme.typography.largeAvatar || {}),
                    color: "#4CAF50",
                    border: "none",
                    borderColor: theme.palette.primary.main,
                    background: "#000",
                    marginRight: "12px",
                  }}
                >
                  <MenuIcon />
                </Avatar>
              </ListItemAvatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* MENU */}
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleDrawerClose}
          sx={{
            "& .MuiDrawer-paper": { width: "240px", boxSizing: "border-box" },
          }}
        >
          <List>
            {menuitems.map((group, index) => (
              <React.Fragment key={group.id}>
                <ListItem>
                  <ListItemText
                    primary={group.title}
                    secondary={group.caption}
                  />
                </ListItem>
                {group.children.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton component={Link} to={item.to}>
                      <ListItemIcon>
                        <item.icon />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {index < menuitems.length - 1 && (
                  <Divider sx={{ border: "1px solid #bdbdbd" }} />
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider sx={{ border: "1px solid #bdbdbd" }} />
        </Drawer>

        <Routes>
          <Route path="/diagnose" element={<Diagnose />} />
          <Route path="/manualaction" element={<Manualaction />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adjustment" element={<Adjustment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Register/>} />
        </Routes>

        {/* NAVIGATION */}
        <CustomNavigationBar />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
