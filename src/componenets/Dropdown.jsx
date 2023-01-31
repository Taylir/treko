import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import "./Dropdown.css";

export default function Dropdown({
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
}) {
  return (
    <div className="drop-down__wrapper">
      <div className="drop-down__flex">
        <div className="drop-down__item">
          {option1} <ChevronRightRounded className="drop-down__arrow" />
        </div>
        <div className="drop-down__item">
          {option2} <ChevronRightRounded className="drop-down__arrow" />
        </div>
        <div className="drop-down__item">
          {option3} <ChevronRightRounded className="drop-down__arrow" />
        </div>
        <div className="drop-down__item">
          {option4} <ChevronRightRounded className="drop-down__arrow" />
        </div>
        <div className="drop-down__item">
          {option5} <ChevronRightRounded className="drop-down__arrow" />
        </div>
      </div>
      <div className="drop-down__flex">
        {option6 && (
          <>
            {option6 && (
              <div className="drop-down__item">
                {option6} <ChevronRightRounded className="drop-down__arrow" />
              </div>
            )}
            {option7 && (
              <div className="drop-down__item">
                {option7} <ChevronRightRounded className="drop-down__arrow" />
              </div>
            )}
            {option8 && (
              <div className="drop-down__item">
                {option8} <ChevronRightRounded className="drop-down__arrow" />
              </div>
            )}
            {option9 && (
              <div className="drop-down__item">
                {option9} <ChevronRightRounded className="drop-down__arrow" />
              </div>
            )}
            {option10 && (
              <div className="drop-down__item">
                {option10} <ChevronRightRounded className="drop-down__arrow" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
