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

const StyledInput = styled.input`
	background-color: transparent;
	padding: 5px 20px 5px 5px;
`;

const Container = styled.div`
	display: flex;
`;
