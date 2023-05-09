import { TextField } from '@mui/material';
import React  from 'react'
import { IProps } from '.';

export default class SearchInput extends React.Component<IProps> {
	render() {
		const handleForUpdate = this.props.handleFilter;
		return <TextField variant='standard' onChange={(e) => handleForUpdate(e.target.value)} />;
	}
}
