import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

function ConfirmationDialogRaw(props) {
  const {
    setFiltersVal,
    filtersVal,
    setValue1,
    value1,
    dialogTitle,
    options,
    onClose,
    value: valueProp,
    open,
    ...other
  } = props;
  const radioGroupRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      setValue1(options[0]);
    }
  }, [open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    // console.log(value1, filtersVal);

    onClose();
  };

  const handleRadioChange = (val) => {
    // setValue1(val);
    // console.log(value1);
    setFiltersVal({ ...filtersVal, [dialogTitle]: val });
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          defaultValue={options[0]}
          // value={value}
          // onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
              onChange={() => handleRadioChange(option)}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // value: PropTypes.string.isRequired,
};

export default function DialogBox({
  open,
  setOpen,
  options,
  dialogTitle,
  setValue1,
  value1,
  setFiltersVal,
  filtersVal,
}) {
  const handleClose = () => {
    setOpen(false);

    // if (newValue) {
    //     setValue('none');
    // }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="div" role="group">
        <ConfirmationDialogRaw
          setFiltersVal={setFiltersVal}
          filtersVal={filtersVal}
          setValue1={setValue1}
          value1={value1}
          dialogTitle={dialogTitle}
          options={options}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
        />
      </List>
    </Box>
  );
}
