import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Selector(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
 
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  console.log(event.target);
  };
  const submit=(e)=>{
    e.preventDefault(); 
    props.handleSubmit(personName);
    setPersonName([]);
  }

  return (
    <Box
    component="form"
    onSubmit={(e)=>{submit(e)}}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' }
    }}
    noValidate
    autoComplete="off"
  >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{props.placeholder}</InputLabel>
        {props.type?<Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
         
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip chip chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.name_list.map((name) => (
            <MenuItem
              key={name._id}
              value={name._id}
              style={getStyles(name.name, personName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>:  <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip chip chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.name_list.map((name) => (
            <MenuItem
            key={name._id}
            value={name._id}
            style={getStyles(name.name, personName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
}
      </FormControl>
          <Button
                  type="submit"
                  fullWidth
                  variant="contained"
               sx={{py:1.8}}
                >
                  {props.button}
                </Button>
    </Box>
  );
}