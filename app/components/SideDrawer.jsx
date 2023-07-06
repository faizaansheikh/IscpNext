"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { GoFilter } from "react-icons/go";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import DialogBox from "./DialogBox";

const filterViews = ["Daily", "Weekly"];
const filterWeek = ["3 Days", "7 Days"];
const filterAttributes = ["RSF", "White Noise"];
const filterButtons = [
  "ABCXYZ Classes",
  "Care",
  "Brand",
  "Grammage",
  "SKU",
  "Variant",
  "Location",
];
const filters = {
  ABCXYZ: [
    "None",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ],
  care: [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
  ],
  brand: ["None", "brand1", "brand2", "brand3", "brand4", "brand5", "brand6"],
  grammage: [
    "None",
    "grammage1",
    "grammage2",
    "grammage3",
    "grammage4",
    "grammage5",
    "grammage6",
  ],
  sku: ["None", "Sku1", "Sku2", "Sku3", "Sku4", "Sku5", "Sku6"],
  variant: [
    "None",
    "variant1",
    "variant2",
    "variant3",
    "variant4",
    "variant5",
    "variant6",
  ],
  location: [
    "None",
    "location1",
    "location2",
    "location3",
    "location4",
    "location5",
    "location6",
  ],
};

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#398585",
  "&:hover": {
    backgroundColor: "#398585",
  },
}));

function SideDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [value1, setValue1] = React.useState([]);
  const [filterView, setFilterView] = React.useState({
    views: "Daily",
    week: "3 Days",
  });
  const [filterAtt, setFilterAtt] = React.useState({
    modalAttribute: "",
  });
  const [filtersVal, setFiltersVal] = React.useState({
    ABCXYZ: "",
    Care: "",
    Brand: "",
    Grammage: "",
    SKU: "",
    Variant: "",
    Location: "",
  });
  const handleClickOpen = (elem) => {
    setOpen(true);

    if (elem === "ABCXYZ Classes") {
      setDialogTitle(elem);
      setOptions(filters.ABCXYZ);
    } else if (elem === "Care") {
      setDialogTitle(elem);
      setOptions(filters.care);
    } else if (elem === "Brand") {
      setDialogTitle(elem);
      setOptions(filters.brand);
    } else if (elem === "Grammage") {
      setDialogTitle(elem);
      setOptions(filters.grammage);
    } else if (elem === "SKU") {
      setDialogTitle(elem);
      setOptions(filters.sku);
    } else if (elem === "Variant") {
      setDialogTitle(elem);
      setOptions(filters.variant);
    } else if (elem === "Location") {
      setDialogTitle(elem);
      setOptions(filters.location);
    }
  };
  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    
  };
  console.log(filterAtt);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleViewChange = (val) => {
    setFilterView({ ...filterView, views: val });
  };
  const handleWeekChange = (val) => {
    setFilterView({ ...filterView, week: val });
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <ListItemButton sx={{ marginTop: "10px" }}>
              <ListItemText primary="Views" sx={{ color: "#398585" }} />
            </ListItemButton>
            <Divider />
            <FormControl sx={{ ml: "10px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Daily"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {filterViews.map((elem) => {
                    return (
                      <FormControlLabel
                        value={elem}
                        onChange={() => handleViewChange(elem)}
                        control={
                          <Radio
                            sx={{
                              color: "#398585",
                              "&.Mui-checked": {
                                color: "#398585",
                              },
                            }}
                          />
                        }
                        label={elem}
                      />
                    );
                  })}
                </div>
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <ListItemButton sx={{ marginTop: "10px" }}>
              <ListItemText
                primary="Week Definition"
                sx={{ color: "#398585" }}
              />
            </ListItemButton>
            <Divider />
            <FormControl sx={{ ml: "20px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="3 Days"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {filterWeek.map((elem) => {
                    return (
                      <FormControlLabel
                        //defaultValue={elem}
                        value={elem}
                        onChange={() => handleWeekChange(elem)}
                        control={
                          <Radio
                            sx={{
                              color: "#398585",
                              "&.Mui-checked": {
                                color: "#398585",
                              },
                            }}
                          />
                        }
                        label={elem}
                      />
                    );
                  })}
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <>
          <ListItemButton sx={{ marginTop: "20px" }}>
            <ListItemText
              primary="Modal Attributes"
              sx={{ color: "#398585" }}
            />
          </ListItemButton>
          <Divider />
          <FormGroup sx={{ ml: "25px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "nowrap",
                flexFlow: "wrap",
              }}
            >
              {filterAttributes.map((elem) => {
                return (
                  <FormControlLabel
                    value={elem}
                    onChange={handleCheckBox}
                    control={
                      <Checkbox
                        sx={{
                          color: "#398585",
                          "&.Mui-checked": {
                            color: "#398585",
                          },
                        }}
                      />
                    }
                    label={elem}
                  />
                );
              })}
            </div>
          </FormGroup>
          <ColorButton
            variant="contained"
            sx={{
              backgroundColor: "#398585",
              width: "300px",
              margin: "0px auto",
              display: "flex",
            }}
          >
            View
          </ColorButton>
        </>

        <>
          <ListItemButton sx={{ marginTop: "20px" }}>
            <ListItemText primary="Year & Month" sx={{ color: "#398585" }} />
          </ListItemButton>
          <Divider />
          <div style={{ display: "flex", gap: 5, padding: "10px 10px" }}>
            <FormControl size="small" sx={{ width: "240px" }}>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Year"
                onChange={handleChange}
              >
                <MenuItem value={10}>2023</MenuItem>
                <MenuItem value={20}>2021</MenuItem>
                <MenuItem value={30}>2019</MenuItem>
                <MenuItem value={30}>20dd17</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ width: "240px" }}>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={handleChange}
              >
                <MenuItem value={10}>Jan</MenuItem>
                <MenuItem value={20}>Mar</MenuItem>
                <MenuItem value={30}>May</MenuItem>
                <MenuItem value={30}>July</MenuItem>
              </Select>
            </FormControl>
          </div>
        </>
        <>
          <ListItemButton sx={{ marginTop: "20px" }}>
            <ListItemText primary="Filters" sx={{ color: "#398585" }} />
          </ListItemButton>
          <Divider />
          {filterButtons.map((elem) => {
            return (
              <ListItemButton onClick={() => handleClickOpen(elem)}>
                <Typography
                  sx={{
                    margin: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  {elem}
                </Typography>
              </ListItemButton>
            );
          })}
        </>
        {open ? (
          <DialogBox
            setFiltersVal={setFiltersVal}
            filtersVal={filtersVal}
            setValue1={setValue1}
            value1={value1}
            dialogTitle={dialogTitle}
            options={options}
            setOpen={setOpen}
            open={open}
          />
        ) : null}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Fab
            size="medium"
            onClick={toggleDrawer(anchor, true)}
            sx={{
              marginLeft: "25px",
              position: "fixed",
              bottom: 20,
              backgroundColor: "white",
            }}
          >
            <GoFilter size={27} color="#398585" />
          </Fab>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideDrawer;
