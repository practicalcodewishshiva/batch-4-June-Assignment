import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ productList }) {
  return (
    <>
      <div style={{ display: "flex", gap: "25px" }}>
        {productList.map((ele, index) => {
          return (
            <>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.meesho.com/my-life-line-alphabet-r-full-sleeve-tshirt-for-boys-and-men-white-full-sleeve-tshirt/p/818vl3"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.productName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {ele.price}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
