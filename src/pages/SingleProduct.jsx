import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Rating,
  Typography,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Sample Product Data (Same as used in PopularInWomen)
const products = [
  {
    id: 1,
    name: "Elegant Women's Dress",
    url: "https://i.pinimg.com/736x/c1/95/a1/c195a13ba15365fa2219877887282df4.jpg",
    description: "Elegant and stylish women's outfit perfect for any occasion.",
    price: 80,
    category: "Women, Dress",
    tags: ["Fashion", "Elegant"],
  },
  {
    id: 2,
    name: "Casual Women's Wear",
    url: "https://i.pinimg.com/736x/67/18/1b/67181b858f116e4862a502766c000341.jpg",
    description: "Trendy and comfortable wear to elevate your fashion game.",
    price: 90,
    category: "Women, Casual",
    tags: ["Trendy", "Casual"],
  },
  {
    id: 3,
    name: "Modern Chic Outfit",
    url: "https://i.pinimg.com/736x/ad/68/e7/ad68e777984fdb9cd35334c597297103.jpg",
    description: "Modern and chic ensemble for confident women.",
    price: 100,
    category: "Women, Modern",
    tags: ["Modern", "Chic"],
  },
  {
    id: 4,
    name: "Stylish Evening Wear",
    url: "https://i.pinimg.com/736x/83/8f/0d/838f0dc4d29c7edb05861780f168761d.jpg",
    description: "Perfect evening wear for a stylish and confident look.",
    price: 80,
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 5,
  
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 6,
    url: "https://i.pinimg.com/736x/5f/d0/ec/5fd0ecff57d2f55852e705133e4907ea.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 7,
    url: "https://i.pinimg.com/736x/3b/25/b0/3b25b0607c22b7de93a3eac56bf4b827.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 8,
    url: "https://i.pinimg.com/736x/5a/97/d8/5a97d88cd963f7d30e0361105c1f28be.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 9,
    url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 10,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 11,
    url: "https://i.pinimg.com/736x/25/33/5a/25335af7dae450dfcadc0bf256f606ce.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 12,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 13,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 14,
    url: "https://i.pinimg.com/736x/65/a3/88/65a388b866bce9854487237f1dbc726e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 15,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 16,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 17,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 18,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 19,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 20,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 21,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 22,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 23,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 24,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 25,
    url: "https://i.pinimg.com/736x/ec/e4/5e/ece45e9f25f857e4ceacad8257bd92ea.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 26,
    url: "https://i.pinimg.com/736x/b7/75/9c/b7759ca45258550686aa1ce297ac5376.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 27,
    url: "https://i.pinimg.com/736x/a7/a0/52/a7a052e9a5af1188aa340659874000c2.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 28,
    url: "https://i.pinimg.com/736x/8b/e2/52/8be25271f91a0e30a39334f39f8d7a80.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 29,
    url: "https://i.pinimg.com/736x/66/cc/08/66cc088e7c5b0752146122bf66a6b05e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 30,
    url: "https://i.pinimg.com/736x/8c/6e/c8/8c6ec8d08ae7a0f2da7dd680416ad1f2.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 31,
    url: "https://i.pinimg.com/736x/b3/c0/73/b3c0731feb38ed0b17a8ff73a62c23c8.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 32,
    url: "https://i.pinimg.com/736x/2d/c3/b0/2dc3b0eda8fe20d8bb68434efcec895e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 33,
    url: "https://i.pinimg.com/736x/24/1d/42/241d4257e6a620f0657c64df539c7f34.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 34,
    url: "https://i.pinimg.com/736x/22/83/a1/2283a13786152b94db7490693d0854a7.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 35,
    url: "https://i.pinimg.com/736x/10/0e/44/100e442473e289464fdd4ee0404f1ea8.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 36,
    url: "https://i.pinimg.com/736x/60/92/27/6092276aeb7b1789458e36b5079cfa75.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 37,
    url: "https://i.pinimg.com/736x/8c/1a/6c/8c1a6c526b919a8befe57ede4bda8aa2.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 38,
    url: "https://i.pinimg.com/736x/4f/20/25/4f202587523eef2c201cac2b6710b8ee.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 39,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 40,
    url: "https://i.pinimg.com/736x/50/b7/3e/50b73e3ce4bc4b1f0851cb8cd1c0b2a8.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 41,
    url: "https://i.pinimg.com/736x/6c/df/40/6cdf40acfe2a50d40a7cb1a8f2b47649.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 42,
    url: "https://i.pinimg.com/736x/9c/52/78/9c527873586bc66aba07d6bf2b8ac8fd.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 43,
    url: "https://i.pinimg.com/736x/ea/1b/79/ea1b79dfa1d1629e6559a04829609204.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 44,
    url: "https://i.pinimg.com/736x/0c/a9/e3/0ca9e38bf6cd1e8a7782feed1fa3aaf8.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 45,
    url: "https://i.pinimg.com/736x/ac/c1/27/acc12769643743b9003345c035eccd93.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 46,
    url: "https://i.pinimg.com/736x/a6/ff/94/a6ff94e2e41cf947ede9b7bf2205a23e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 47,
    url: "https://i.pinimg.com/736x/c8/0d/36/c80d3651b95f00b8d8feb48bf62ac3e4.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 48,
    url: "https://i.pinimg.com/736x/16/29/9c/16299cd1af2b0223aa46f7bfc60139da.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 49,
    url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 50,
    url: "https://i.pinimg.com/736x/2d/68/aa/2d68aacb174d3e9410eb44c255dc1cbb.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 51,
    url: "https://i.pinimg.com/736x/a0/bb/52/a0bb5242d817cb74de1e5d42f5bb876c.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 52,
    url: "https://i.pinimg.com/736x/97/eb/58/97eb58383151d9beef7fddf7dc4e9cc0.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 53,
    url: "https://i.pinimg.com/736x/c8/13/fc/c813fc6417f79fa0a4a1ae70a9f6a073.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 54,
    url: "https://i.pinimg.com/736x/db/46/a2/db46a2e9d41936c59ed673bac669cc37.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 55,
    url: "https://i.pinimg.com/736x/03/6d/17/036d175f478a16b6cdf6d0e5824615c1.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 56,
    url: "https://i.pinimg.com/736x/13/40/38/134038445ad76dc6098ab355d58d8715.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 57,
    url: "https://i.pinimg.com/736x/87/87/4b/87874b1d85cd43fcad6e92c958fd4b8b.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 58,
    url: "https://i.pinimg.com/736x/93/e7/79/93e7790453d9fdf11534113ebb13d5e8.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 59,
    url: "https://i.pinimg.com/736x/89/81/f0/8981f0368e9c89a554f7c325adcdc6e0.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 60,
    url: "https://i.pinimg.com/736x/9a/a2/04/9aa2048ab579f4a0a09ee603788bb155.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 61,
    url: "https://i.pinimg.com/736x/34/e3/fa/34e3fa1133ae175f4b995fe62d6eef72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 62,
    url: "https://i.pinimg.com/736x/38/df/0a/38df0ad5e84f4a80e7cb65752b51118f.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 63,
    url: "https://i.pinimg.com/736x/a0/b2/f2/a0b2f22e0495fba46454c237063da04e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 64,
    url: "https://i.pinimg.com/736x/12/1c/18/121c189a5fe206fbdba89065261fbf2d.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 65,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 66,
    url: "https://i.pinimg.com/736x/5f/d0/ec/5fd0ecff57d2f55852e705133e4907ea.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 67,
    url: "https://i.pinimg.com/736x/3b/25/b0/3b25b0607c22b7de93a3eac56bf4b827.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 68,
    url: "https://i.pinimg.com/736x/5a/97/d8/5a97d88cd963f7d30e0361105c1f28be.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 69,
    url: "https://i.pinimg.com/736x/3f/84/d8/3f84d8de9bee01915bbd7241beef9b02.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 70,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 71,
    url: "https://i.pinimg.com/736x/25/33/5a/25335af7dae450dfcadc0bf256f606ce.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 72,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 73,
    url: "https://i.pinimg.com/736x/f8/4d/cb/f84dcb70efeedb4dff7e74ce0f98de7e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 74,
    url: "https://i.pinimg.com/736x/65/a3/88/65a388b866bce9854487237f1dbc726e.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 75,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 76,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 77,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 78,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 79,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 80,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 81,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 82,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 83,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
  {
    id: 84,
    url: "https://i.pinimg.com/736x/8d/67/62/8d67622644638685b75a2192532c6a72.jpg",
    dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
    name: "Stylish Evening Wear",
    category: "Women, Evening",
    tags: ["Elegant", "Evening"],
  },
];

// Labels for Rating
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value) => `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;

const sizeOptions = ["S", "M", "L", "XL", "XXL"];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Responsive breakpoint

  // If no product found
  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Product Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        p: 4,
        maxWidth: 1200,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "#fff",
      }}
    >
      {/* Product Image */}
      <Box sx={{ flex: 1, maxWidth: isMobile ? "100%" : "50%" }}>
        <img
          src={product.url}
          alt={product.name}
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          flex: 1,
          maxWidth: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Title */}
        <Typography variant="h4" fontWeight="bold">
          {product.name}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="product-rating"
            value={rating}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => setRating(newValue)}
            onChangeActive={(event, newHover) => setHover(newHover)}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Typography sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Typography>
        </Box>

        {/* Price */}
        <Typography variant="h5" fontWeight="bold" color="primary">
          ${product.price}
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="text.secondary">
          {product.description}
        </Typography>

        {/* Size Selection */}
        <Typography variant="h6">Select Size:</Typography>
        <ButtonGroup>
          {sizeOptions.map((size) => (
            <Button key={size} variant="outlined">
              {size}
            </Button>
          ))}
        </ButtonGroup>

        {/* Quantity Selector */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6">Quantity:</Typography>
          <TextField
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, e.target.value))}
            inputProps={{ min: 1 }}
            size="small"
            sx={{ width: 70 }}
          />
        </Box>

        {/* Category & Tags */}
        <Box>
          <Typography variant="body2">
            <strong>Category:</strong> {product.category}
          </Typography>
          <Typography variant="body2">
            <strong>Tags:</strong> {product.tags.join(", ")}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            sx={{ flex: 1, height: 50 }}
          >
            Add to Cart
          </Button>
          {/* <IconButton
            onClick={() => setLiked(!liked)}
            sx={{ border: "1px solid #ccc", borderRadius: "50%", width: 50, height: 50 }}
          >
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
