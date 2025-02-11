import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Pagination,
    TextField,
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send";
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  
  const Home = () => {
    return (
      <>
        <Dashboard />
        <PopularInWomen />
        <ExclusiveOfferForYou />
        <NewCollections />
        <GetExclusiveOffersOnYourEmail />
      </>
    );
  };
  
  export default Home;
  
  const Dashboard = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          p: 4,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ maxWidth: 500, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            New Arrival Only
          </Typography>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Dashboard
          </Typography>
          <Typography variant="h4" gutterBottom>
            Manage your tasks efficiently
          </Typography>
          <Typography variant="body1" gutterBottom>
            Stay on top of your projects with our intuitive and powerful
            dashboard. Customize your workflow and maximize productivity.
          </Typography>
          <Button variant="outlined" endIcon={<SendIcon />}>
            Latesh Collection
          </Button>
        </Box>
        <Box sx={{ position: "relative", width: "50%", maxWidth: 500, p: 2 }}>
          <img
            src="https://i.pinimg.com/736x/f5/02/c1/f502c1cfb835d67c5eeb06864898e999.jpg"
            alt="dashboard_img"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50% 40% 60% 30%",
              objectFit: "cover",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
      </Box>
    );
  };
  
  const PopularInWomen = () => {
    const popular_in_women = [
      {
        id: 1,
        url: "https://i.pinimg.com/736x/c1/95/a1/c195a13ba15365fa2219877887282df4.jpg",
        dec: "Elegant and stylish women's outfit perfect for any occasion.",
        rs: 80,
      },
      {
        id: 2,
        url: "https://i.pinimg.com/736x/67/18/1b/67181b858f116e4862a502766c000341.jpg",
        dec: "Trendy and comfortable wear to elevate your fashion game.",
        rs: 90,
      },
      {
        id: 3,
        url: "https://i.pinimg.com/736x/ad/68/e7/ad68e777984fdb9cd35334c597297103.jpg",
        dec: "Modern and chic ensemble for confident women.",
        rs: 100,
      },
      {
        id: 4,
        url: "https://i.pinimg.com/736x/83/8f/0d/838f0dc4d29c7edb05861780f168761d.jpg",
        dec: "Modern and chic ensemble for confident women.",
        rs: 80,
      },
    ];
  
    return (
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          Popular In Women
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 3,
          }}
        >
          {popular_in_women.map((item) => (
            <NavLink
              key={item.id}
              to={`/SingleProduct/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                // key={item.id}
                sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={item.url}
                  alt="Popular item"
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="body1" gutterBottom textAlign="center">
                    {item.dec}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    ${item.rs}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          ))}
        </Box>
      </Box>
    );
  };
  
  const ExclusiveOfferForYou = () => {
    return (
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          p: 5,
          border: "2px solid #ff9800",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
            Exclusive Offer For You
          </Typography>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Only on best seller products
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem", borderRadius: "8px" }}
          >
            Check Now
          </Button>
        </Box>
        <Box>
          <img
            src="https://i.pinimg.com/736x/05/81/b7/0581b7b25c1df6c1a5501f7734e9f053.jpg"
            alt="offer"
            width={450}
            height={450}
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>
    );
  };
  
  const NewCollections = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8; // Number of items per page
  
    const newCollections = [
      {
        id: 5,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 6,
        url: "https://i.pinimg.com/736x/5f/d0/ec/5fd0ecff57d2f55852e705133e4907ea.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 7,
        url: "https://i.pinimg.com/736x/3b/25/b0/3b25b0607c22b7de93a3eac56bf4b827.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 8,
        url: "https://i.pinimg.com/736x/5a/97/d8/5a97d88cd963f7d30e0361105c1f28be.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 9,
        url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 10,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 11,
        url: "https://i.pinimg.com/736x/25/33/5a/25335af7dae450dfcadc0bf256f606ce.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 12,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 13,
        url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 14,
        url: "https://i.pinimg.com/736x/65/a3/88/65a388b866bce9854487237f1dbc726e.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 15,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 16,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 17,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 18,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 19,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 20,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 21,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 22,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 23,
        url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60,
      },
      {
        id: 24,
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
      <Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            fontWeight="bold"
          >
            New Collections
          </Typography>
        </Box>
        <Box>
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          textAlign="center"
                        >
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
        </Box>
      </Box>
    );
  };
  
  const GetExclusiveOffersOnYourEmail = () => {
    return (
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" }, // Responsive width
          margin: "auto",
          p: { xs: 3, md: 5 },
          textAlign: "center",
          border: "2px solid black",
          borderRadius: "15px",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)", // Soft shadow
          backgroundColor: "#f9f9f9", // Light background
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
            Get Exclusive Offers on Your Email
          </Typography>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Subscribe to our newsletter and stay updated.
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{
              width: { xs: "100%", md: "500px" },
              maxWidth: "100%",
              margin: "auto",
            }}
          >
            <TextField
              fullWidth
              label="Enter your email"
              id="email-input"
              variant="outlined"
              sx={{
                mb: 2,
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                p: 1.5,
                fontWeight: "bold",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  