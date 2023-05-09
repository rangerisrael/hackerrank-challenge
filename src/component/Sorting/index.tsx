import React, { useState } from 'react'
import ArticlesSorting from './article';
import { Articles } from './data';

const Sorting = ({articles}:{articles:Articles[]}) => {


function sortValue(a: { [x: string]: number; },b: { [x: string]: number; },type='upvotes') {

	if(b[type] - a[type]){
		return -1
	}
	if(a[type] - b[type]){
		return 1;
	}

	return 0
	
}


const [valid,setValid] = useState<boolean>(false);


const [row, setRow] = useState<Articles[]>(!valid ? articles.sort((a,b) => b.upvotes - a.upvotes) : []);



const sortByUpvoted = ()=>{
	setValid(!valid);
	const sorted = articles.sort((a,b)=>b.upvotes - a.upvotes)

	setRow(sorted)
}

const sortByRecent = ()=>{
	setValid(!valid);
	const sorted = articles.sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime())

	setRow(sorted)
}



  return (
		<div>
			<div className='flex max-w-sm mx-auto justify-between my-3'>
				<label className='form-hint mb-0 text-uppercase font-weight-light' style={{ color: '#7e7e7e' }}>
					Sort By
				</label>
				<button
					data-testid='most-upvoted-link'
					style={{ color: '#FFA500' }}
					className='small text-dark font-bold'
					onClick={sortByUpvoted}
				>
					Most Upvoted
				</button>
				<button
					data-testid='most-recent-link'
					className='small text-dark font-bold'
					style={{ color: '#FFA500' }}
					onClick={sortByRecent}
				>
					Most Recent
				</button>
			</div>
			<ArticlesSorting articles={row} />
		</div>
	);
}

export default Sorting;
