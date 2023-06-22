import * as React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "50px",
  borderRadius: "50%",
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor"
    }
  }
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

export default function ImgButton({ imageUrl }) {
  return (
    <ImageButton
      focusRipple
      style={{
        width: "30px",
        height: "30px"
      }}
    >
      <ImageSrc style={{ backgroundImage: `url(${imageUrl})` }} />
    </ImageButton>
  );
}
