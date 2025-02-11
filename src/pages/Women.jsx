import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Pagination,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { NavLink } from "react-router-dom";
  
  const Women = () => {
    return (
      <div>
        <Ads />
        <Filter />
        <MenProduct />
      </div>
    );
  };
  
  export default Women;
  
  const Ads = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on larger
          justifyContent: "space-between",
          alignItems: "center",
          border: "2px solid black",
          borderRadius: "10px",
          width: { xs: "80%", sm: "85%", md: "70%" }, // Responsive width
          margin: "auto",
          marginTop:'3rem',
          marginBottom:'3rem',
          padding: { xs: "1.5rem", md: "2rem" }, // Adjust padding
          boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow
          backgroundColor: "#f9f9f9",
          gap: { xs: "1.5rem", md: 0 }, // Add space between items on small screens
        }}
      >
        {/* Left Text Content */}
        <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }} // Adjust text size
          >
            Flat 50% Off
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 2, fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            12 Hours 20 Mins
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            Explore Now
          </Button>
        </Box>
  
        {/* Right Image Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1, // Allow image to take remaining space
          }}
        >
          <img
            src="https://i.pinimg.com/736x/71/5e/2b/715e2b633187ddc5d112d222eb61e78d.jpg"
            alt="ads-img"
            style={{
              width: "100%",
              maxWidth: "14rem", // Ensures image never gets too large
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    );
  };
  
  const Filter = () => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  const MenProduct = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8; // Number of items per page
  
    const newCollections = [
      {
        id: 45,
        url: "https://i.pinimg.com/736x/ac/c1/27/acc12769643743b9003345c035eccd93.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 46,
        url: "https://i.pinimg.com/736x/a6/ff/94/a6ff94e2e41cf947ede9b7bf2205a23e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 47,
        url: "https://i.pinimg.com/736x/c8/0d/36/c80d3651b95f00b8d8feb48bf62ac3e4.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 48,
        url: "https://i.pinimg.com/736x/16/29/9c/16299cd1af2b0223aa46f7bfc60139da.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 49,
        url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 50,
        url: "https://i.pinimg.com/736x/2d/68/aa/2d68aacb174d3e9410eb44c255dc1cbb.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 51,
        url: "https://i.pinimg.com/736x/a0/bb/52/a0bb5242d817cb74de1e5d42f5bb876c.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 52,
        url: "https://i.pinimg.com/736x/97/eb/58/97eb58383151d9beef7fddf7dc4e9cc0.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 53,
        url: "https://i.pinimg.com/736x/c8/13/fc/c813fc6417f79fa0a4a1ae70a9f6a073.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 54,
        url: "https://i.pinimg.com/736x/db/46/a2/db46a2e9d41936c59ed673bac669cc37.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 55,
        url: "https://i.pinimg.com/736x/03/6d/17/036d175f478a16b6cdf6d0e5824615c1.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 56,
        url: "https://i.pinimg.com/736x/13/40/38/134038445ad76dc6098ab355d58d8715.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 57,
        url: "https://i.pinimg.com/736x/87/87/4b/87874b1d85cd43fcad6e92c958fd4b8b.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 58,
        url: "https://i.pinimg.com/736x/93/e7/79/93e7790453d9fdf11534113ebb13d5e8.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 59,
        url: "https://i.pinimg.com/736x/89/81/f0/8981f0368e9c89a554f7c325adcdc6e0.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 60,
        url: "https://i.pinimg.com/736x/9a/a2/04/9aa2048ab579f4a0a09ee603788bb155.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 61,
        url: "https://i.pinimg.com/736x/34/e3/fa/34e3fa1133ae175f4b995fe62d6eef72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 62,
        url: "https://i.pinimg.com/736x/38/df/0a/38df0ad5e84f4a80e7cb65752b51118f.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 63,
        url: "https://i.pinimg.com/736x/a0/b2/f2/a0b2f22e0495fba46454c237063da04e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 64,
        url: "https://i.pinimg.com/736x/12/1c/18/121c189a5fe206fbdba89065261fbf2d.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
    ];
  
    // Calculate the number of pages
    const totalPages = Math.ceil(newCollections.length / itemsPerPage);
  
    // Get items for the current page
    const displayedItems = newCollections.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  
    const handleChange = (event, value) => {
      setPage(value);
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {displayedItems.map((items) => (
            <Grid item xs={2} sm={4} md={3} key={items.id}>
              <NavLink
                key={items.id}
                to={`/SingleProduct/${items.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={items.url}
                    alt="Popular item"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="body1" gutterBottom textAlign="center">
                      {items.dec}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      ${items.price}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    );
  };
  