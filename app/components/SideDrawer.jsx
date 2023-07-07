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
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import DialogBox from './DialogBox';

const ColorButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "#398585",
    "&:hover": {
        backgroundColor: "#398585",
    },
}));

// const FabButton = styled(Fab)(() => ({
//     color: "#398585",
//     backgroundColor: "white",
//     "&:hover": {
//         backgroundColor: "#398585",
//         color:
//     },
// }));

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <ListItemButton sx={{ marginTop: '10px' }}>
                            <ListItemText primary="Views" sx={{ color: '#398585' }} />
                        </ListItemButton>
                        <Divider />
                        <FormControl sx={{ ml: "10px" }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue='Daily'
                            >
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel value="Daily" control={<Radio sx={{
                                        color: '#398585',
                                        '&.Mui-checked': {
                                            color: '#398585',
                                        },
                                    }} />} label="Daily" />
                                    <FormControlLabel value="Weekly" control={<Radio sx={{
                                        color: '#398585',
                                        '&.Mui-checked': {
                                            color: '#398585',
                                        },
                                    }} />} label="Weekly" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <ListItemButton sx={{ marginTop: '10px' }}>
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
                                    <FormControlLabel value="3 Days" control={<Radio sx={{
                                        color: '#398585',
                                        '&.Mui-checked': {
                                            color: '#398585',
                                        },
                                    }} />} label="3 Days" />
                                    <FormControlLabel value="7 Days" control={<Radio sx={{
                                        color: '#398585',
                                        '&.Mui-checked': {
                                            color: '#398585',
                                        },
                                    }} />} label="7 Days" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <>
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Modal Attributes" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <FormGroup sx={{ ml: "25px" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <FormControlLabel control={<Checkbox sx={{
                                color: '#398585',
                                '&.Mui-checked': {
                                    color: '#398585',
                                },
                            }} />} label="RSF" />
                            <FormControlLabel control={<Checkbox sx={{
                                color: '#398585',
                                '&.Mui-checked': {
                                    color: '#398585',
                                },
                            }} />} label="White Noise" />
                        </div>
                    </FormGroup>
                    <ColorButton variant='contained' sx={{ backgroundColor: '#398585', width: '300px', margin: '0px auto', display: 'flex' }}>View</ColorButton>
                </>

                <>
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Year & Month" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <div style={{ display: 'flex', gap: 5, padding: '10px 10px' }}>
                        <FormControl size='small' sx={{ width: '240px' }}>
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
                                <MenuItem value={30}>2017</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size='small' sx={{ width: '240px' }}>
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
                    <ListItemButton sx={{ marginTop: '20px' }}>
                        <ListItemText primary="Filters" sx={{ color: '#398585' }} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            ABCXYZ Classes
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            Care
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            Brand
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            Grammage
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            SKU
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            Variant
                        </Typography>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpen}>
                        <Typography sx={{ margin: '10px 20px', fontSize: '18px', cursor: 'pointer' }} >
                            Location
                        </Typography>
                    </ListItemButton>
                </>
                {open ? <DialogBox setOpen={setOpen} open={open} /> : null}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Fab size='medium' onClick={toggleDrawer(anchor, true)} sx={{ marginLeft: '25px', position: 'fixed', top: 80, backgroundColor: 'white' }}>
                        <GoFilter size={27} color='#398585' />
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