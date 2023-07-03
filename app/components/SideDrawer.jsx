'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from "@mui/material/styles";
import { GoFilter } from 'react-icons/go';
import IconButton from '@mui/material/IconButton';
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';


const ColorButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "#398585",
    "&:hover": {
        backgroundColor: "#398585",
    },
}));

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ top: '10px !important' }}>
                <>
                    <ListItemButton sx={{ marginTop: '10px' }}>
                        <ListItemText primary="View" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <FormControl sx={{ ml: "20px" }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue='Daily'
                        >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <FormControlLabel value="Daily" control={<Radio />} label="Daily" onClick={toggleDrawer(anchor, false)} />
                                <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" onClick={toggleDrawer(anchor, false)} />
                            </div>
                        </RadioGroup>
                    </FormControl>
                </>

                <>
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Week Definition" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <FormControl sx={{ ml: "20px" }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue='3 Days'
                        >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <FormControlLabel value="3 Days" control={<Radio />} label="3 Days" onClick={toggleDrawer(anchor, false)} />
                                <FormControlLabel value="7 Days" control={<Radio />} label="7 Days" onClick={toggleDrawer(anchor, false)} />
                            </div>
                        </RadioGroup>
                    </FormControl>
                </>

                <>
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Modal Attributes" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <FormGroup sx={{ ml: "20px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox />} label="RSF" />
                            <FormControlLabel control={<Checkbox />} label="White Noise" />
                        </div>
                    </FormGroup>
                    <ColorButton variant='contained' sx={{ backgroundColor: '#398585', width: '240px', margin: '0px auto', display: 'flex' }}>View</ColorButton>
                </>

                <>
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Year & Month" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <FormControl size='small' sx={{ width: '240px', margin: '20px auto', display: 'flex' }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size='small' sx={{ width: '240px', margin: '20px auto', display: 'flex' }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </>

            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} sx={{ marginLeft: '30px' }}>
                        <GoFilter size={35} color='#398585' />
                    </IconButton>
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