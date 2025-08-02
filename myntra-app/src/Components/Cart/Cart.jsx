import * as React from "react";

import CustomCards from "../CustomCards/CustomCards";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

export default function Cart() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={8}>
          <div className="col-10">
            <CustomCards />

            <div style={{ display: "flex", gap: "29px" }}>
              <div> 1/1 Item SELECTED </div>
              <div>REMOVE</div>
              <div> MOVE TO WISHLIST</div>
            </div>

            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid size={4}>
          {" "}
          <div className="col-2">Coupons</div>
        </Grid>
      </Grid>
    </>
  );
}
