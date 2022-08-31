import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { SideBar, Videos } from "../exports";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [ selectedCategory, setSelectedCategory ] = useState("Nuevo");
  const [ selectedCategoryIcon, setSelectedCategoryIcon ] = useState(<HomeIcon />);
  const [ videos, setVideos ] = useState([]);

  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2 }, background: "#161616" }}>
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedCategoryIcon={setSelectedCategoryIcon}
        />
      </Box>

      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "#FFFFFF", p: 2, backgroundColor: "#151515", display: "flex", alignItems: "center", gap: "10px"}}>
          {selectedCategoryIcon}
          {selectedCategory}
        </Typography>
 
        <Videos videos={videos} justifyContent="flex-start" />
      </Box>
    </Stack>
  )
}

export default Feed;