import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  IconButton,
  Avatar,
  ListItemAvatar,
  BottomNavigation,
  BottomNavigationAction,
  styled,
  Switch,
  Tooltip,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import CropFreeIcon from "@mui/icons-material/CropFree";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Custom Styled IconButton
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
}));

// Navigation Bar Component

export default function CustomNavigationBar() {
  const [value, setValue] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (event) => {
    // Only open the dialog if the switch is being turned on
    if (event.target.checked) {
      setOpen(true);
    } else {
      setIsSwitchOn(false); // Directly turn off the switch without confirmation
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setIsSwitchOn(true); // Confirm and turn on the switch
    handleClose();
  };
  const theme = useTheme();

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{ position: "fixed", bottom: 0, width: "100%", bgcolor: "#607D8B" }}
    >
      <Box display="flex" borderRadius="3px">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton type="button">
            ON
            <Switch checked={isSwitchOn} onChange={handleClickOpen} />
            OFF
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                {"Are you sure you want to Turn the Main Line ON?"}
              </DialogTitle>
              <Divider />
              <DialogContent>
                <DialogContentText>
                  The main line will be turned ON after you click on confirm.
                  Please note that this action can cause changes.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAgree} autoFocus>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </IconButton>
        </Box>
      </Box>
      <Box p={1} />

      {/* Start, Stop, Reset Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 3,
          pr: 1,
          backgroundColor: "#079b6c",
          border: "2px solid #00e676",
          borderRadius: 3,
        }}
      >
        <ListItemAvatar sx={{ mt: 0 }}>
          <Tooltip title="Resume">
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.largeAvatar,
                color: theme.palette.primary.main,
                border: "none",
                borderColor: theme.palette.primary.main,
                background: "#000",
              }}
            >
              <StyledIconButton color="success">
                <PlayCircleOutlineIcon />
              </StyledIconButton>
            </Avatar>
          </Tooltip>
        </ListItemAvatar>

        <ListItemAvatar sx={{ mt: 0 }}>
          <Tooltip title="Pause">
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.largeAvatar,
                color: theme.palette.primary.main,
                border: "none",
                borderColor: theme.palette.primary.main,
                background: "#000",
              }}
            >
              <StyledIconButton color="error">
                <PauseCircleOutlineIcon />
              </StyledIconButton>
            </Avatar>
          </Tooltip>
        </ListItemAvatar>

        <ListItemAvatar sx={{ mt: 0 }}>
          <Tooltip title="Reset">
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.largeAvatar,
                color: theme.palette.primary.main,
                border: "none",
                borderColor: theme.palette.primary.main,
                background: "#000",
              }}
            >
              <StyledIconButton color="primary">
                <RestartAltIcon />
              </StyledIconButton>
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </Box>

      {/* Toggle Buttons with Icons */}
      <BottomNavigationAction
        label="Favorite"
        value="favorite"
        icon={<StarBorderIcon />}
      />
      <BottomNavigationAction
        label="Alert"
        value="alert"
        icon={<CrisisAlertIcon />}
      />
      <BottomNavigationAction
        label="History"
        value="history"
        icon={<HistoryEduIcon />}
      />
      <BottomNavigationAction
        label="Analytics"
        value="analytics"
        icon={<AnalyticsIcon />}
      />
      <BottomNavigationAction
        label="Zoom In"
        value="zoom_in"
        icon={<ZoomInIcon />}
      />
      <BottomNavigationAction
        label="Zoom Out"
        value="zoom_out"
        icon={<ZoomOutIcon />}
      />
      <BottomNavigationAction
        label="Focus"
        value="focus"
        icon={<CenterFocusWeakIcon />}
      />
      <BottomNavigationAction
        label="Expand"
        value="expand"
        icon={<CropFreeIcon />}
      />
      <BottomNavigationAction
        label="Alarms"
        value="assignments"
        icon={<AssignmentIcon />}
      />
    </BottomNavigation>
  );
}

//dialog box for both on/off feature
{
  /* <Box sx={{ display: "flex", alignItems: "center" }}>
<IconButton type="button">
  OFF
  <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
  ON
  <Dialog open={dialogOpen} onClose={handleClose}>
    <DialogTitle>
      {dialogType === "on"
        ? "Are you sure you want to Turn the Main Line ON?"
        : "Are you sure you want to Turn the Main Line OFF?"}
    </DialogTitle>
    <Divider />
    <DialogContent>
      <DialogContentText>
        {dialogType === "on"
          ? "The main line will be turned ON after you click on confirm. Please note that this action can cause changes."
          : "The main line will be turned OFF after you click on confirm. Please note that this action can cause changes to the system !!!"}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleAgree} autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
</IconButton>
</Box>


  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(''); // 'on' or 'off'

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSwitchChange = (event) => {
    const checked = event.target.checked;
    setIsSwitchOn(checked); // Directly update the switch state
    setDialogType(checked ? "on" : "off");
    setDialogOpen(true); // Open the dialog to confirm the action
  };

  const handleAgree = () => {
    // Confirm the action based on dialogType
    setIsSwitchOn(dialogType === "on");
    setDialogOpen(false); // Close the dialog
  }; */
}
