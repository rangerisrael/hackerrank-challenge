import { List, ListItem, ListItemText } from '@mui/material';
import React, { Component } from 'react'
import { IFilter } from '.';




export default class ListUsers extends Component<IFilter, any> {
	constructor(props: IFilter) {
		super(props);
	}

	render() {
		const filter = this.props.filteredValue;
		const isEmpty = this.props.isEmpty;
		const status = this.props.status;
		const person = this.props.users;

		console.log(person);

		if (status === 'idle') {
			return <p>Loading...</p>;
		}
		if (isEmpty === true) {
			return <p>No result found</p>;
		}

		if (isEmpty === false) {
			return (
				<List>
					{person
						.filter(
							(item: any) =>
								item.name.includes(filter) === true ||
								item.name.toLowerCase().includes(filter) === true ||
								item.name.toUpperCase().includes(filter) === true,
						)
						.map((item: any, index: number) => (
							<ListItem key={index}>
								<ListItemText primary={item.name}></ListItemText>
							</ListItem>
						))}
				</List>
			);
		}
	}
}
