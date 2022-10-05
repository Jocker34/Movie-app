import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const DropdownBar = ({ language, setLanguage }) => {
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
	const items = [
		{
			id: 1,
			value: 'PL',
		},
		{
			id: 2,
			value: 'EN',
		},
	];

	return (
		<Container>
			<StyledButton
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{language}
			</StyledButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				{items.map((item) => (
					<MenuItem
						key={item.id}
						onClick={() => changeLanguage(item)}
					>
						{item.value}
					</MenuItem>
				))}
			</Menu>
		</Container>
	);
};

const StyledButton = styled(Button)`
	color: white !important;
	border: 1px solid white !important;
	font-weight: bold !important;
`;

const Container = styled.div`
	margin: 20px 85px 20px 0;
`;
