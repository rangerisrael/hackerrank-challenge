import image1 from './assets/images/nature1.jpg';
import image2 from './assets/images/nature2.jpg';
import image3 from './assets/images/nature3.jpg';
import image4 from './assets/images/nature4.jpg';

export type IImage ={
	thumb: string;
	image: string;
}



export const catalogsList:IImage[] = [
	{
		thumb: image1,
		image: image1,
	},
	{
		thumb: image2,
		image: image2,
	},
	{
		thumb: image3,
		image: image3,
	},
	{
		thumb: image4,
		image: image4,
	},
];
