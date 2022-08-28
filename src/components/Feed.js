import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../exports";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2 }, background: "#161616" }}>
        <SideBar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff"}}>
          Copyright 2022 NowTube
        </Typography>
      </Box>

      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#FFFFFF", p: 2, backgroundColor: "#151515" }}>
          Nuevo
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  )
}

export default Feed;