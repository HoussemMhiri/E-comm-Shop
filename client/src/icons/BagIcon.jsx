import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#123026",
    color: "white",
  },
}));
const BagIcon = () => {
  return (
    <div>
      <CustomBadge badgeContent={1} color="primary">
        <LiaShoppingBagSolid style={{ fontSize: "25px" }} />
      </CustomBadge>
    </div>
  );
};

export default BagIcon;
