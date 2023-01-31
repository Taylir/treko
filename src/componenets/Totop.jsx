import { ArrowUpwardRounded } from "@mui/icons-material";
import React from "react";
import "./Totop.css";

function Totop({ scroll }) {
  return (
      <a href="/" className={scroll ? "totop" : "attop"}>
        <ArrowUpwardRounded />
      </a>
  );
}

export default Totop;
