import React, { Component } from 'react'
import ListUsers from './countries';
import SearchInput from './search-input';

 export type IProps = {
		handleFilter: (countries: string) => void;
 };
 
  export type ICountries = {
		filteredValue: string;
		isEmpty: boolean;
		users: Partial<Person[]>;
		status: 'idle' | 'success' | 'error';
	};
 

export type IUsers = {
	users: Partial<Person[]>;
	status: 'idle' | 'success' | 'error';
}

export type IFilter = {
	filteredValue: string;
	isEmpty: boolean;
} & IUsers;

export type Person = {
	id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string
      city: string,
      zipcode: number,
      geo: {
        lat: number,
        lng: number
      }
		}
}


export default class App extends React.Component<IProps, IFilter> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			filteredValue: '',
			isEmpty: false,
			users: [],
			status: 'idle',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((res) => {
				if (typeof res === 'object') {
					this.setState({ status: 'success' });
					this.setState({ users: res });
				} else {
					this.setState({ status: 'error' });
					this.setState({ users: [] });
				}
			});
	}

	handleFilter(value: string) {
		console.log(value);
		if (value.length > 0) {
				if(this.state.users.length > 0){
					this.state.users.filter((item:any) => {
						if (
							item.name.includes(value) === true ||
							item.name.toLowerCase().includes(value) === true ||
							item.name.toUpperCase().includes(value) === true
						) {
							this.setState({ filteredValue: value });
							this.setState({ isEmpty: false });

						} else {
							
							this.setState({ isEmpty: true });

						}
					});
				}
		}
		else{
			this.setState({ isEmpty: false });

		}
	}

	render() {
		return (
			<div>
				<SearchInput handleFilter={this.handleFilter.bind(this)} />
				<ListUsers
					users={this.state.users}
					status={this.state.status}
					filteredValue={this.state.filteredValue}
					isEmpty={this.state.isEmpty}
				/>
			</div>
		);
	}
}
