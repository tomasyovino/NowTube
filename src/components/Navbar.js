import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants" ;
import { SearchBar } from "../exports";

const Navbar = () => {
  return (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: "sticky", background: "#161616", top: 0, justifyContent: "space-between", zIndex: 99 }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "20px", color: "#FFFFFF" }}>
            <img src={logo} alt="logo" height={45} />
            <h2>NowTube</h2>
        </Link>
        <SearchBar />

    </Stack>
  )
}

export default Navbar;