import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "../../Template/MainCard";
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import Chip from "@mui/material/Chip";
import { selectTriggeredAlarms, selectAllAlarms } from "../store/alarmSlice";
import { setCurrentAlert } from "../store/alertSlice";
import { alerts } from "./logs";

const Info = () => {
  const alarms = useSelector(selectTriggeredAlarms);
  const alarmsData = useSelector(selectAllAlarms);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const alarmTypeIcon = (type) => {
    switch (type) {
      case "Error":
        return <ErrorIcon sx={{ color: "alert" }} />;
      case "Warning":
        return <WarningIcon sx={{ color: "#FFC107" }} />;
      case "Info":
        return <InfoIcon sx={{ color: "blue" }} />;
      default:
        return <InfoIcon sx={{ color: "grey" }} />;
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case "Error":
        return "rgba(239, 83, 80, 0.5)";
      case "Warning":
        return "rgba(255, 235, 59, 0.5)";
      case "Info":
        return "rgba(144, 202, 249, 0.5)";
      default:
        return "rgba(0, 0, 0, 0.1)";
    }
  };

  //Action Button Handle
  const handleNavigation = (eventName) => {
    dispatch(setCurrentAlert(eventName)); // Set the current alert based on the type
    navigate('./logs/${eventName}'); 
  };

  const getTimeStamp = () => {
    const now = new Date();
    return { time: now.toLocaleTimeString(), date: now.toLocaleDateString() };
  };

  const columns = [
    { id: "type", label: "Type", minWidth: 50 },
    { id: "date", label: "Date", minWidth: 50 },
    // { id: "status", label: "Status", minWidth: 50 },
    { id: "timein", label: "Time In", minWidth: 100 },
    { id: "deviceid", label: "Device ID", minWidth: 100 },
    { id: "kind", label: "Description", minWidth: 100 },
    { id: "action", label: "Action", minWidth: 100, align: "center" },
  ];

  return (
    <Box
      mx={10}
      sx={{
        border: "2px solid grey",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: 2,
      }}
    >
      <MainCard
        title="Alarm Management Panel"
        sx={{
          maxWidth: 1900, // Max width for the card
          width: "170vh", // Make it responsive
          margin: 2, // Center it horizontally if the container is wider than the card
        }}
      >
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {alarms.map((alarm, index) => (
                <TableRow
                  key={index}
                  sx={{ backgroundColor: getBackgroundColor(alarm.type) }}
                >
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: alarmTypeBgColor(alarm.type),
                        marginRight: 1,
                        display: "inline-flex",
                        verticalAlign: "middle",
                      }}
                    >
                      {alarmTypeIcon(alarm.type)}
                    </Avatar>
                    <Typography display="inline">{alarm.type}</Typography>
                  </TableCell>
                  <TableCell>{getTimeStamp().date}</TableCell>
                  {/* <TableCell>
                    {eventDetails.status === "Resolved" ? (
                      <Chip
                        label="Pending"
                        color="error"
                        variant="outlined"
                        sx={{
                          "&:hover": {
                            backgroundColor: "warning.light",
                            color: "white",
                          },
                        }}
                      />
                    ) : (
                      <Chip
                        label="Resolved"
                        color="success"
                        variant="outlined"
                        sx={{
                          "&:hover": {
                            backgroundColor: "success.light",
                            color: "white",
                          },
                        }}
                      />
                    )}
                  </TableCell> */}
                  <TableCell>{getTimeStamp().time}</TableCell>
                  <TableCell>{alarmsData[alarm.eventName]?.deviceId}</TableCell>
                  <TableCell>
                    {alarmsData[alarm.eventName]?.description}
                  </TableCell>
                  <TableCell key={columns.action} align="center">
                    <Button
                      variant="outlined"
                      onClick={() => handleNavigation('error')} 
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
    </Box>
  );
};

export default Info;

const alarmTypeBgColor = (type) => {
  switch (type) {
    case "Error":
      return "red";
    case "Warning":
      return "yellow";
    case "Info":
      return "lightgray";
    default:
      return "inherit";
  }
};
