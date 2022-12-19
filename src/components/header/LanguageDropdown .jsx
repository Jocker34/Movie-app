import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'hooks/useTranslation';

const languageOptions = [
  {
    code: 'pl-PL',
    label: 'Polish (PL)',
    value: 'PL',
  },
  {
    code: 'en-US',
    label: 'English (US)',
    value: 'EN',
  },
];

export const LanguageDropdown = () => {
  const { language, setLanguage } = useTranslation();
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
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={style}
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
        {languageOptions.map((item) => (
          <MenuItem key={item.code} onClick={() => changeLanguage(item)}>
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const style = {
  color: 'common.white',
  border: '1px solid white',
  fontWeight: 'bold',
};
