import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const CountriesSubregionfilter = ({
  handleSubRegionChange,
  titleName,
  name1,
  name2,
  name3,
  name4,
  name5,
  name0,
}) => {
  return (
    <div>
      <div className="material">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{titleName}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => handleSubRegionChange(e)}
          >
            <MenuItem value={name0}>{name0}</MenuItem>
            <MenuItem value={name1}>{name1}</MenuItem>
            <MenuItem value={name2}>{name2}</MenuItem>
            <MenuItem value={name3}>{name3}</MenuItem>
            <MenuItem value={name4}>{name4}</MenuItem>
            <MenuItem value={name5}>{name5}</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CountriesSubregionfilter;
