import './App.css';
import { Button } from '@mui/material';
import 'twin.macro';
import { motion } from 'framer-motion';
import axios from 'axios'
import { useEffect } from 'react';
import TodoApp from './component/todo';
import Sorting from './component/Sorting';
import { articles } from './component/Sorting/data';
import Sliding from './component/Slider';
import CatalogDisplay from './component/CatalogVIewer';
import SeachQuery from './component/Search';


function App() {


	return (
		<div className='grid'>
			{/* customizing MUI Buttons */}
			<div className='grid grid-cols-3 place-items-center my-auto h-[100vh]'>

				<Sorting articles={articles}/>
				<Sliding/>
				<CatalogDisplay/>
				<SeachQuery/>
		</div>
		</div>
	);
}

export default App;


// https://sandygoody.medium.com/vite-twin-macro-d27a5f89df06