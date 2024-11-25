import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Badge,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationList from "../event/notificationlist";

// notification status options`
const status = [
  {
    value: "all",
    label: "All Notification",
  },
  {
    value: "new",
    label: "New",
  },
  {
    value: "unread",
    label: "Unread",
  },
  {
    value: "other",
    label: "Other",
  },
];

const Notifications = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const prevOpen = useRef(open);

  const [value, setValue] = useState("all");
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          border: "2px solid #00e676",
          borderRadius: 2,
          p: 0.5,
          borderTop: 0,
          borderRight: 0,
        }}
      >
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <Badge badgeContent={20} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={matchesXs ? "bottom" : "bottom-end"}
        sx={{pl:175, zIndex: (theme) => theme.zIndex.appBar + 1 }}
      >
        <Paper sx={{ maxWidth: 360, width: "100vw" }}>
          <ClickAwayListener onClickAway={handleClose}>
            <Box sx={{ py: 2 }}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ px: 2, pb: 2 }}
                  >
                    <Typography variant="subtitle1" flex={1}>
                      Notifications
                    </Typography>
                    <Chip label="22" color="secondary" />
                  </Stack>
                </Grid>
                <Divider />

                <Grid item xs={12}>
                  <Box sx={{ p: 2 }}>
                    <TextField
                      fullWidth
                      select
                      value={value}
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                    >
                      {status.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Box>
                </Grid>

                {/* NotificationList component should go here */}
                <Grid item xs={12}>
                  <Box overflow="auto">
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12} p={0}>
                        <Divider sx={{ my: 0 }} />
                      </Grid>
                    </Grid>
                    <NotificationList />
                  </Box>
                </Grid>
              </Grid>
              <Divider />
              <Box sx={{ textAlign: "center", py: 1 }}>
                <Button to="/all-notifications" size="small">
                  View All
                </Button>
              </Box>
            </Box>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

export default Notifications;
