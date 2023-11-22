import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";

const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#123026",
    color: "white",
  },
}));

const LikeItem = () => {
  return (
    <div>
      <CustomBadge badgeContent={1} color="primary">
        <FavoriteBorderOutlinedIcon style={{ fontSize: "25px" }} />
      </CustomBadge>
    </div>
  );
};

export default LikeItem;
