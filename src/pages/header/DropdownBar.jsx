import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageContext from 'helpers/languageContext';
import { ITEMS } from 'constants';

export const DropdownBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (item) => {
    setLanguage(item.value);
    handleClose();
  };

  return (
    <Container>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={ButtonStyle}
      >
        {language}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {ITEMS.map((item) => (
          <MenuItem key={item.id} onClick={() => changeLanguage(item)}>
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 85px 20px 0;
`;

const ButtonStyle = {
  color: 'white',
  border: '1px solid white',
  fontWeight: 'bold',
};
