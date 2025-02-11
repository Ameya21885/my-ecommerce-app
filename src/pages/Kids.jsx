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
  
  const Kids = () => {
    return (
      <div>
        <Ads />
        <Filter />
        <MenProduct />
      </div>
    );
  };
  
  export default Kids;
  
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
            src="https://i.pinimg.com/736x/84/0f/cc/840fcce0fb6690516322f4409d3dc14e.jpg"
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
        id: 65,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 66,
        url: "https://i.pinimg.com/736x/5f/d0/ec/5fd0ecff57d2f55852e705133e4907ea.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 67,
        url: "https://i.pinimg.com/736x/3b/25/b0/3b25b0607c22b7de93a3eac56bf4b827.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 68,
        url: "https://i.pinimg.com/736x/5a/97/d8/5a97d88cd963f7d30e0361105c1f28be.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 69,
        url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 70,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 71,
        url: "https://i.pinimg.com/736x/25/33/5a/25335af7dae450dfcadc0bf256f606ce.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 72,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 73,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 74,
        url: "https://i.pinimg.com/736x/65/a3/88/65a388b866bce9854487237f1dbc726e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 75,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 76,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 77,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 78,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 79,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 80,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 81,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 82,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 83,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 84,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
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
  