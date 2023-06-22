import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import "./layout.css";

export default function Banner() {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ diplay: "flex", alignItem: "center", textAlign: "start" }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: "700!important", color: "white" }}
        >
          <span style={{ color: "#ffb636" }}>Leading</span> Crypto Casino
        </Typography>
        <Typography
          component="p"
          style={{ fontSize: "15px", color: "#55657e", marginTop: "10px" }}
        >
          Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the
          best of the superior Bitcoin Casino.{" "}
        </Typography>
        <div>
          <Button>Sing Up</Button>
        </div>
      </Grid>
      <Grid item sm={6}>
        {/* <img src="assets/img/auth/hero.png" logo="hero" className="img-hero" /> */}
      </Grid>
    </Grid>
  );
}
