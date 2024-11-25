import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
  ListItemSecondaryAction,
} from "@mui/material";

// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import StoreIcon from "@mui/icons-material/Store";
import MailIcon from "@mui/icons-material/Mail";
import PortraitIcon from "@mui/icons-material/Portrait";

// Dummy user avatar
import User1 from "../assets/user.svg"; // Adjust the import path

// styles
const ListItemWrapper = (props) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      style={{
        cursor: "pointer",
        padding: theme.spacing(2),
        "&:hover": { background: theme.palette.primary.light },
        "& .MuiListItem-root": {
          padding: 0,
        },
      }}
    />
  );
};

const NotificationList = () => {
  const theme = useTheme();

  const chipStyles = {
    height: 24,
    padding: theme.spacing(0, 0.75),
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflowY: "auto", // Enable vertical scrolling
        maxHeight: 300, // Set a maximum height
        "& ul": { padding: 0 },
      }}
    >
      {/* Repeated items mapped from a source array would go here */}
      {/* Example single notification */}
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText primary="John Doe" secondary="2 min ago" />
        </ListItem>
        <Typography variant="subtitle2">
          It is a long established fact that a reader will be distracted
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Unread"
            sx={{
              ...chipStyles,
              color: theme.palette.error.main,
              bgcolor: theme.palette.error.light,
            }}
          />
          <Chip
            label="New"
            sx={{
              ...chipStyles,
              color: theme.palette.warning.main,
              bgcolor: theme.palette.warning.light,
            }}
          />
        </Stack>
      </ListItemWrapper>

      <Divider />

      {/* ... Additional notifications ... */}

      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              sx={{
                color: theme.palette.success.dark,
                backgroundColor: theme.palette.success.light,
                border: "none",
                borderColor: theme.palette.success.main,
              }}
            >
              <StoreIcon stroke={1.5} size="1.3rem" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Store Verification Done"
            secondary="2 min ago"
          />
        </ListItem>

        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">
              We have successfully received your request.
            </Typography>
          </Grid>

          <Stack direction="row" spacing={1}>
            <Chip
              label="Unread"
              sx={{
                ...chipStyles,
                color: theme.palette.error.main,
                bgcolor: theme.palette.error.light,
              }}
            />
            <Chip
              label="New"
              sx={{
                ...chipStyles,
                color: theme.palette.warning.main,
                bgcolor: theme.palette.warning.light,
              }}
            />
          </Stack>
        </Grid>
      </ListItemWrapper>

      <Divider />

      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              sx={{
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
                border: "none",
                borderColor: theme.palette.primary.main,
              }}
            >
              <MailIcon stroke={1.5} size="1.3rem" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1">Check Your Mail</Typography>
            }
          />
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">
              All done! Now check your inbox as you&apos;re in for a sweet
              treat!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  endIcon={<TelegramIcon stroke={1.5} size="1.3rem" />}
                >
                  Mail
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>

      <Divider />
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="subtitle1">John Doe</Typography>}
          />
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography component="span" variant="subtitle2">
              Uploaded two file on &nbsp;
              <Typography component="span" variant="h6">
                21 Jan 2020
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.secondary.light,
                  }}
                >
                  <CardContent>
                    <Grid container direction="column">
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                          <PortraitIcon stroke={1.5} size="1.3rem" />
                          <Typography variant="subtitle1">demo.jpg</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="subtitle1">John Doe</Typography>}
          />
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Chip label="Confirmation of Account." color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

export default NotificationList;
