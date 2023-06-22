import * as React from "react";
import PropTypes from "prop-types";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography, DialogContent, Dialog } from "@mui/material";

import "./modal.css";

import AuthPanel from "../auth/AuthPanel";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleOk = () => {
    onClose();
  };

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: "690px",
          borderRadius: "15px"
        }
      }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
      fullScreen={fullScreen}
    >
      <DialogContent
        dividers
        style={{
          overflow: "hidden",
          padding: "unset",
          borderTop: "unset",
          borderBottom: "unset"
        }}
      >
        <Grid container>
          <Grid
            item
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              textAlign: "center",
              width: "330px",
              // height: "550px",
              padding: "40px 20px 0",
              background: "url(assets/img/auth/hero.png) no-repeat, #2d3ac1",
              backgroundPosition: "0% 90%",
              backgroundSize: "contain",
              color: "white"
            }}
            sm={6}
            xs
          >
            <Typography component="div" className="wel-brand">
              🎁 Welcome Pack
            </Typography>
            <Typography className="wel-modal">
              WELCOME BONUS{" "}
              <span style={{ color: "yellow", whiteSpace: "nowrap" }}>
                300 FS + 150%
              </span>{" "}
              ON DEPOSIT{" "}
              <span style={{ color: "yellow", whiteSpace: "nowrap" }}>
                UP TO $500
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="wel-form">
            <AuthPanel handleOk={handleOk} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default function Modal({ transfer, parentFunc }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  React.useEffect(() => {
    setOpen(transfer);
  });

  const handleClose = (newValue) => {
    parentFunc();
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <ConfirmationDialogRaw
      id="ringtone-menu"
      keepMounted
      open={open}
      onClose={handleClose}
      value={value}
    />
  );
}
