import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Item from './Item';
import '../style/home.css';
import '../style/items.css';

const Fiction = 'all items filter';
const NoFiction = 'Clothes';
const Biography = 'Electronics';

const Items = () => {
  const location = useLocation();
  const [state, setFilter] = location.state === null
    ? useState({ filter: Fiction }) : useState({ filter: location.state.filter });
  const items = useSelector((state) => state.products);

  const handleChange = (event) => {
    setFilter({ filter: event.target.value });
  };

  return (
    <div className="cards-container outside">
      <Box sx={{ minWidth: 120 }} className="filter-bar">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.filter}
            label="OrderBy"
            onChange={handleChange}
          >
            <MenuItem value={Fiction}>Fiction</MenuItem>
            <MenuItem value={NoFiction}>No-fiction</MenuItem>
            <MenuItem value={Biography}>Biography</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="cards-container">
        {items !== undefined ? items.map((item) => {
          if (item.category.name === state.filter || state.filter === Fiction) {
            return <Item className="card" key={item.id} title={item.title} price={item.price} images={item.images} id={item.id} description={item.description} />;
          }
          return false;
        }) : false}
      </div>
    </div>
  );
};

export default Items;
