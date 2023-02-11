import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import ModalWindow from "./modalWindow/area";


const Map = (props) =>
{
	// const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
	const URL = './images/photo_map.jpg';
	const MAP = {
		name: 'my-map',
		// GET JSON FROM BELOW URL AS AN EXAMPLE
		// areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',

		areas: [
			{
				"id": "0",
				"title": "area-0",
				"shape": "poly",
				"name": "0",
				"preFillColor": "green",
				"fillColor": "#eab54d4d",
				"strokeColor": "white",
				"coords": [
					67, 126, 63, 451, 528, 127
				],
			},
			{
				"id": "1",
				"title": "area-1",
				"shape": "poly",
				"name": "1",
				"preFillColor": "red",
				"fillColor": "#eab54d4d",
				"strokeColor": "white",
				"coords": [
					63, 453, 63, 590, 72, 599, 461, 601, 528, 127
				],
			},
			{
				"id": "2",
				"title": "area-2",
				"shape": "poly",
				"name": "2",
				"preFillColor": "blue",
				"fillColor": "#eab54d4d",
				"strokeColor": "white",
				"coords": [
					527, 127, 680, 124, 692, 130, 691, 395, 464, 602
				],
			},
			{
				"id": "3",
				"title": "area-3",
				"shape": "poly",
				"name": "3",
				"preFillColor": "orange",
				"fillColor": "#eab54d4d",
				"strokeColor": "white",
				"coords": [
					691, 395, 462, 600, 681, 604, 692, 592
				],
			},
		]
	};

	function handleClick(e)
	{
		console.log('Click Map area  e= ', e.id);
	};

	const [ clickedAreaId, setClickedAreaId ] = useState(0);
	const [ open, setOpen ] = useState(false);
	// const [ clickedColor, setClickedColor ] = useState('transparent');

	function handleClickOpen(e)
	{
		// e.preFillColor = 'transparent';
		setOpen(true);
		setClickedAreaId(e.id);
		MAP.areas[ clickedAreaId ].preFillColor = 'red';
	};

	const handleClose = () =>
	{
		setOpen(false);
	};


	console.log('MAP.areas[ clickedAreaId ] = ', MAP.areas[ clickedAreaId ]);
	console.log('MAP.areas[ clickedAreaId ].preFillColor = ', MAP.areas[ clickedAreaId ].preFillColor);


	return (
		<>
			<ImageMapper
				src={URL}
				map={MAP}
				// onClick={(e) => { handleClick(e); }}
				onClick={(e) => { handleClickOpen(e); }}
			/>
			<ModalWindow open={open} handleClose={handleClose} project={MAP.areas[ clickedAreaId ]} />
		</>
	);
};

export { Map };
