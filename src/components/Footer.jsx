// import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import { Box, Typography, IconButton } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#343a40", color: "#f8f9fa" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "80%",
          margin: "auto",
          gap: { xs: 4, md: 8 },
          py: 4,
        }}
      >
        {/* Logo and Description */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <img
            src="https://i.pinimg.com/736x/db/16/45/db1645cc1ed95625a5dff41ee9a0f164.jpg"
            alt=""
            width={60}
            style={{ borderRadius: "40px" }}
          />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Practice Home
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 2 }}>
            Leading provider of innovative solutions for businesses.
          </Typography>
          <Box>
            <IconButton sx={{ color: "#f8f9fa", mr: 1 }} aria-label="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#f8f9fa" }} aria-label="instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Categories and Contact Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, md: 8 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* Company Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <HomeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">Home</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <GroupIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">About us</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">Contact</Typography>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <AddIcCallIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">9675141090</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">
                pracice.home21@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NearMeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">
                Address, city, state, Country.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#212529",
          color: "#f8f9fa",
          py: 2,
          px: 4,
        }}
      >
        <Typography variant="body2">© 2025 Practice Home</Typography>
      </Box>
    </Box>
  );
}
