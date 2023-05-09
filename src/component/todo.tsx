import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


type Users = {
	age: string;
	city: string;
	name: string;
};

const API_URL = import.meta.env.VITE__API_URL;

const UsersApp = () => {
	const [add, setAdd] = useState<Users[]>([]);

	useEffect(() => {

		fetch(`${API_URL}/users`).then(res => res.json()).then(res => setAdd(res))
		
	}, [setAdd]);

	// program to generate random strings

	console.log(add,'data')

	// declare all characters
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const numbers = '0123456789'

	function generateString(length: number,type= 'string') {
		let result:string | number = '';
		
		if(type === 'string'){
				const charactersLength = characters.length;
				for (let i = 0; i < length; i++) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}

		}
		else{

		let arrNumber:number[] = [];

		add.map((value:Partial<Users>) => arrNumber.push(value.id as number));


		console.log(arrNumber)

			
				const charactersLength = numbers.length;
				for (let i = 0; i < length; i++) {

					result += numbers.charAt(Math.floor(Math.random() * charactersLength));


					

					if (arrNumber.includes(Number(result) as unknown as number) === true) {
						console.log('is match');
						break;
					}
					result = Number(result);
				}



		}

		return result;
	}


	const handlerAddToEvent = () => {
		const newUsers:Users = {
			name: generateString(10, 'string') as string,
			age: generateString(6, 'string') as string,
			city: generateString(10, 'string') as string,
		};

		setAdd([...add, newUsers]);

		setTimeout(() => {
			fetch(`${API_URL}/users/new`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUsers),
			}).then((res) => res.json).then((res) => console.log(res));

			console.log('added');
				
		}, 3000);

	};

	return (
		<div className='grid grid-cols-3 gap-2 max-w-[500px]  m-auto'>
			{add.length > 0 &&
				add.map((item, index: number) => (
					<div  key={index}>
						<div>{item.name}</div>
						<div>{item.age}</div>
						<div>{item.city}</div>
					</div>
				))}

			<div>
				<button
					onClick={handlerAddToEvent}
					className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
				>
					Add Users
				</button>
			</div>
		</div>
	);
}

export default UsersApp
