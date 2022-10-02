import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = ({
	labelText,
	placeholder,
	onChange,
	onKeyDown,
	value,
	type,
	className,
	name,
}) => {
	console.log(placeholder);
	return (
		<Container>
			<label htmlFor='input'>{labelText}</label>
			<StyledInput
				type={type ?? 'text'}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className={className}
				onKeyDown={onKeyDown}
			/>
		</Container>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	labelText: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.any,
};

const StyledInput = styled.input`
	background-color: transparent;
	padding: 5px 20px 5px 5px;
`;

const Container = styled.div`
	display: flex;
`;
