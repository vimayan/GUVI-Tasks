import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "transparent" }}>
          <Toolbar sx={{ dispaly: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              color="inherit"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              TINYURL
            </Typography>
            <LogoutIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MenuBar;
