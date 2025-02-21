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
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Men = () => {
  return (
    <div>
      <Ads />
      <Filter />
      <MenProduct />
    </div>
  );
};

export default Men;

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
        marginTop: "3rem",
        marginBottom: "3rem",
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
        Filter
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
          {/* <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText> */}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="low" control={<Radio />} label="Low" />
              <FormControlLabel value="high" control={<Radio />} label="High" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Apply</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
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
      id: 25,
      url: "https://i.pinimg.com/736x/ec/e4/5e/ece45e9f25f857e4ceacad8257bd92ea.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 26,
      url: "https://i.pinimg.com/736x/b7/75/9c/b7759ca45258550686aa1ce297ac5376.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 27,
      url: "https://i.pinimg.com/736x/a7/a0/52/a7a052e9a5af1188aa340659874000c2.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 28,
      url: "https://i.pinimg.com/736x/8b/e2/52/8be25271f91a0e30a39334f39f8d7a80.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 29,
      url: "https://i.pinimg.com/736x/66/cc/08/66cc088e7c5b0752146122bf66a6b05e.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 30,
      url: "https://i.pinimg.com/736x/8c/6e/c8/8c6ec8d08ae7a0f2da7dd680416ad1f2.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 31,
      url: "https://i.pinimg.com/736x/b3/c0/73/b3c0731feb38ed0b17a8ff73a62c23c8.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 32,
      url: "https://i.pinimg.com/736x/2d/c3/b0/2dc3b0eda8fe20d8bb68434efcec895e.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 33,
      url: "https://i.pinimg.com/736x/24/1d/42/241d4257e6a620f0657c64df539c7f34.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 34,
      url: "https://i.pinimg.com/736x/22/83/a1/2283a13786152b94db7490693d0854a7.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 35,
      url: "https://i.pinimg.com/736x/10/0e/44/100e442473e289464fdd4ee0404f1ea8.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 36,
      url: "https://i.pinimg.com/736x/60/92/27/6092276aeb7b1789458e36b5079cfa75.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 37,
      url: "https://i.pinimg.com/736x/8c/1a/6c/8c1a6c526b919a8befe57ede4bda8aa2.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 38,
      url: "https://i.pinimg.com/736x/4f/20/25/4f202587523eef2c201cac2b6710b8ee.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 39,
      url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 40,
      url: "https://i.pinimg.com/736x/50/b7/3e/50b73e3ce4bc4b1f0851cb8cd1c0b2a8.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 41,
      url: "https://i.pinimg.com/736x/6c/df/40/6cdf40acfe2a50d40a7cb1a8f2b47649.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 42,
      url: "https://i.pinimg.com/736x/9c/52/78/9c527873586bc66aba07d6bf2b8ac8fd.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 43,
      url: "https://i.pinimg.com/736x/ea/1b/79/ea1b79dfa1d1629e6559a04829609204.jpg",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 60,
    },
    {
      id: 44,
      url: "https://i.pinimg.com/736x/0c/a9/e3/0ca9e38bf6cd1e8a7782feed1fa3aaf8.jpg",
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
