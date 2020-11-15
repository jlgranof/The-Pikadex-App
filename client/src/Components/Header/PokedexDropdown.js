import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux'

const PokedexDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pokedexes = useSelector(state => state.userPokedexSlice).userPokedex

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let pokedexListItem
  if (pokedexes) {
    pokedexListItem = pokedexes.map((pokedex => (
    <div>
        <a href={`/user/${pokedex.id}`}>
            <MenuItem key={pokedex.id} onClick={handleClose}>{pokedex.name}</MenuItem>
        </a>
    </div>
    )))
  }

  return (
    <div>
      <Button style={{backgroundColor: 'white'}}aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        User Pokedexes
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pokedexListItem}
      </Menu>
    </div>
  );
}

export default PokedexDropdown
