import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../exports";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "#FFFFFF", p: 2, backgroundColor: "#151515", display: "flex", alignItems: "center", gap: "10px"}}>
        Resultados de búsqueda para <span style={{ color: "#F31503"}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} justifyContent="space-evenly" />
    </Box>
  )
}

export default SearchFeed;