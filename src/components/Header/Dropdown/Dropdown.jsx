import React, { useState } from 'react';
import styled from 'styled-components';

export const Dropdown = ({ items }) => {
	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState('EN');
	const toggle = () => setOpen(!open);
	const handleOnClick = (item) => {
		toggle(!open);
		setSelection(item.value);
	};

	return (
		<Container>
			<Test2 onClick={() => toggle(!open)}>
				<span>{selection}</span>
			</Test2>

			{open ? (
				<div>
					{items.map((item) => (
						<Test key={item.id} onClick={() => handleOnClick(item)}>
							<span>{item.value}</span>
						</Test>
					))}
				</div>
			) : null}
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	width: 20px;
	padding: 0 5px 0 5px;
	border: 1px solid white;
	margin: 20px 85px 20px 0;
	background-color: white;
	font-weight: bold;
	border-radius: 5px;
`;
const Test = styled.div`
	background-color: #f9f9f9;
	position: relative;
	z-index: 100;
	:hover {
		display: block;
	}
`;

const Test2 = styled.div`
	display: flex;
`;
