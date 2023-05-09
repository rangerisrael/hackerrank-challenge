import React, { useEffect } from 'react'
import { catalogsList } from './data';


type ThumbProps={
		items: Array<{thumb:string,image:string}>,
		currentIndex:number,
		handleClick:(index:number)=>void
}

function Thumbs({ items, currentIndex, handleClick }:ThumbProps) {
    
    return (
			<>
				{items.map((catalog, idx) => (
					<div id={idx} key={idx} data-testid={'thumb-button-' + idx} onClick={() => handleClick(idx)}>
						<div
							key={idx}
							style={{ border: idx === currentIndex ? '1px solid #FFA500' : 'initial', padding: '5px', cursor: 'pointer' }}
						>
							<span>
								<img src={catalog.thumb} alt='' width={50} height={50} />
							</span>
						</div>
					</div>
				))}
			</>
		);
}



function Viewer({ catalogImage }:{catalogImage:string}) {
	return (
		<div className='shadow dark:bg-gray-900 dark:border-gray-700 p-5'>
			<img alt='catalog-view' className='w-[400px] h-[250px]' src={catalogImage} data-testid='catalog-view' />
		</div>
	);
}



const CatalogDisplay = () => {

const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
const checkRef = React.useRef<HTMLInputElement>(null);
const catalogLength = catalogsList.length;

useEffect(() => {
	const interval = setInterval(() => {
		if (checkRef.current?.checked) {

			if(catalogLength === selectedIndex+1){
				setSelectedIndex(0);
			}else{
				setSelectedIndex((prev) => prev + 1);
			}
		}

	}, 1000);

	return () => {
		clearInterval(interval);
	};
}, [checkRef, selectedIndex, catalogLength]);

const handlerThumbClick = (index:number) => {
		setSelectedIndex(index);
}

const handlePrevCLick = () => {
	setSelectedIndex((prev) => prev - 1);
}

const handleNextClick = () => {
	if(catalogLength === selectedIndex+1){
		setSelectedIndex(0);
	}
	else{
			setSelectedIndex((prev) => prev + 1);
	}
};
  return (
		<div>
			<div className='grid place-items-center'>
				<div className='layout-row justify-content-center'>
					<div className='card pt-25'>
						<Viewer catalogImage={catalogsList[selectedIndex].image} />
						<div className='flex gap-3 justify-center my-5'>
							<button
								className='icon-only outlined'
								data-testid='prev-slide-btn'
								disabled={selectedIndex === 0}
								onClick={handlePrevCLick}
								style={{
									background: selectedIndex === 0 ? '#eaeaea' : '#FFA500',
									padding: '3px 10px',
									color: selectedIndex === 0 ? '#FFA500' : '#ffffff',
									padding: '3px 10px',
									cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer',
								}}
							>
								<i className='material-icons'>Prev</i>
							</button>
							<Thumbs items={catalogsList} currentIndex={selectedIndex} handleClick={handlerThumbClick} />
							<button
								className='icon-only outlined'
								data-testid='next-slide-btn'
								onClick={handleNextClick}
								disabled={selectedIndex === catalogLength}
								style={{
									background: selectedIndex === catalogLength ? '#eaeaea' : '#FFA500',
									padding: '3px 10px',
									color: selectedIndex === catalogLength ? '#FFA500' : '#ffffff',
									cursor: selectedIndex === catalogLength ? 'not-allowed' : 'pointer',
								}}
							>
								<i className='material-icons'>Next</i>
							</button>
						</div>
					</div>
				</div>
				<div className='layout-row justify-content-center mt-25'>
					<input ref={checkRef} type='checkbox' data-testid='toggle-slide-show-button' />
					<label
						style={{ cursor: 'pointer', color: selectedIndex === catalogLength ? '#eaeaea' : '#FFA500', padding: '3px 10px' }}
						className='ml-6'
					>
						Start Slide Show
					</label>
					<label
						onClick={() => setSelectedIndex(0)}
						style={{ 	cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer', color: selectedIndex === 0 ? '#eaeaea' : '#FFA500', padding: '3px 10px' }}
						className='ml-6'
					>
						Restart
					</label>
				</div>
			</div>
		</div>
	);
}

export default CatalogDisplay
