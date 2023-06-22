import React from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Modal from "../components/modal/Modal";
export default function Navbar({ toggleDrawer, open }) {
  const navItems = ["LOGIN", "REGISTER"];
  const [transfer, setTransfer] = React.useState(false);

  const handleTransfer = () => {
    setTransfer(!transfer);
  };

  const parentFunc = () => {
    setTransfer(false);
  };
  return (
    <AppBar
      component="nav"
      position="fixed"
      open={open}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // backgroundColor: "hsla(180, 73%, 4%, 0.932)!important"
        backgroundColor: "#253246!important"
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 12 }}>
          <img src="assets/img/logo.png" width="150px" alt="logo" />
        </div>
        <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: "#fff", margin: { xs: "0px 5px" } }}
              onClick={handleTransfer}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Modal transfer={transfer} parentFunc={parentFunc} />
    </AppBar>
  );
}
