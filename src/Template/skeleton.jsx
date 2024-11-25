import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const variants = ["h1", "h3", "body1", "caption"];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonTypography() {
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
      <Grid container spacing={8}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
        <Grid item xs>
          <TypographyDemo />
        </Grid>
      </Grid>
    </Box>
  );
}
