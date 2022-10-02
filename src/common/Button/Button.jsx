import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Button = ({ buttonText, onClick, className }) => (
	<StyledButton className={className} onClick={onClick}>
		{buttonText}
	</StyledButton>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	className: PropTypes.string,
	handleClick: PropTypes.func,
};

const StyledButton = styled.button`
	display: flex;
	margin: 20px 0 20px 0;
	background-color: transparent;
	padding: 5px 20px 5px 20px;
`;
