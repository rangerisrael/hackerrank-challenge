import React from 'react'
import { ISLIDER } from './data';

const Slider = ({ slides }: { slides: ISLIDER[] }) => {

const [start, setStart] = React.useState<number>(0);
const [end, setEnd] = React.useState<number>(1);
const length = slides.length;


const reset = () =>{

  setStart(0);
  setEnd(1);

}

const next = () => {

  if(end === length){
    setEnd(length)
  }
  setStart((prev) => prev + 1);
  setEnd((prev) => prev + 1);
}

const prev = () =>{
  setStart((prev) => prev - 1);
  setEnd((prev) => prev - 1);
}


	return (
		<div>
			<div id='navigation' className='text-center flex mx-auto max-w-sm'>
				<div className='flex justify-between w-[100%]'>
					<button
						data-testid='button-restart'
						className='px-5 py-1'
						onClick={reset}
						disabled={end === 1}
						style={{
							outline: end === 1 ? '1px solid #eaeaea' : '1px solid #FFA500',
							color: end === 1 ? '#FFA500' : '#ffffff',
							cursor: end === 1 ? 'not-allowed' : 'pointer',
							background: end === 1 ? '#eaeaea' : '#FFA500',
						}}
					>
						Restart
					</button>

					<div className='flex justify-end gap-5'>
						<button
							data-testid='button-prev'
							className='px-5 py-1'
							disabled={end === 1}
							onClick={prev}
							style={{
								background: end === 1 ? '#eaeaea' : '#FFA500',
								color: end === 1 ? '#FFA500' : '#ffffff',
								cursor: end === 1 ? 'not-allowed' : 'pointer',
							}}
						>
							Prev
						</button>
						<button
							data-testid='button-next'
							disabled={end === length}
							className='px-5 py-1'
							onClick={next}
							style={{
								background: end === length ? '#eaeaea' : '#FFA500',
								color: end === length ? '#FFA500' : '#ffffff',
								cursor: end === length ? 'not-allowed' : 'pointer',
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>

			{slides.slice(start, end).map((item: ISLIDER, index: number) => (
				<div
					id='slide'
					className='max-w-sm card flex flex-col text-center mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 "'
					key={index}
				>
					<h1 style={{ color: '#FFA500' }} className='font-bold' data-testid='title'>
						{item.title}
					</h1>
					<p style={{ color: '#FFA500' }} data-testid='text' className='font-[500]'>
						{item.text}
					</p>
				</div>
			))}
		</div>
	);
};

export default Slider
