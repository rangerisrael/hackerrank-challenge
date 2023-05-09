import React from 'react'
import { Articles } from './data';

const ArticlesSorting = ({ articles }: { articles: Articles[] }) => {
	return (
		<div className='grid place-items-center'>
			<div className='relative overflow-x-auto'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase text-center'>
						<tr style={{ color: '#7e7e7e' }}>
							<th scope='col' className='px-6 py-3 rounded-l-lg'>
								Title
							</th>
							<th scope='col' className='px-6 py-3'>
								Upvotes
							</th>
							<th scope='col' className='px-6 py-3 rounded-r-lg'>
								Date
							</th>
						</tr>
					</thead>
					<tbody>
						{articles.map((item: Articles, index: number) => (
							<tr
								className='bg-white dark:bg-gray-800'
								data-testid='article'
								key={index}
								style={{ background: index % 2 === 0 ? '#eaeaea' : 'initial', color: '#FFA500' }}
							>
								<td
									data-testid='article-title'
									scope='row'
									className='px-6 py-4 font-medium whitespace-nowrap'
									style={{ color: '#7e7e7e' }}
								>
									{item.title}
								</td>
								<td data-testid='article-upvotes' className='px-6 py-4'>
									{item.upvotes}
								</td>
								<td data-testid='article-date' className='px-6 py-4'>
									{item.date}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ArticlesSorting;
