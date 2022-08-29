import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory, setSelectedCategoryIcon }) => {


    return (
        <Stack
            direction="row"
            sx={{ 
                overflowY: "auto",
                height: { sx: "auto", md: "95%"},
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => {
                        setSelectedCategory(category.name);
                        setSelectedCategoryIcon(category.icon);
                    }}
                    style={{
                        background: category.name === selectedCategory && "#AAAAAA",
                        color: "white"
                    }}
                    key={category.name}
                >
                    <span style={{ color: category.name === selectedCategory ? "white" : "#AAAAAA", marginRight: "15px" }}>{category.icon}</span>
                    <span style={{ opacity: categories.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
    }

export default SideBar;