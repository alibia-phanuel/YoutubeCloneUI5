import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selecetCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selecetCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selecetCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selecetCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
