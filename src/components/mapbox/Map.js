import React, { useEffect, useState }	from 'react';
import axios	from 'axios';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const backendURL = process.env.REACT_APP_BACKEND_URL;

const radius = 100;

const you = {
	id: 123123123,
	name: 'you',
	address: '123 Main St.',
	latitude: 12.345345,
	longitude: 12.345345,
};

const markerHeight = 50, markerRadius = 10, linearOffset = 25;
const popupOffsets = {
'top': [0, 0],
'top-left': [0,0],
'top-right': [0,0],
'bottom': [0, -markerHeight],
'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
'left': [markerRadius, (markerHeight - markerRadius) * -1],
'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};

let map;

const Map = () => {
	const [ locations, setLocations ] = useState([]);
	const getMap = () => {
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ you.latitude, you.longitude ],
		});
	};
	const Popup = ({ name, address }) => {
		return(
			`<div>
				<p>Name: ${ name }</p>
				<p>Address: ${ address }</p>
			</div>`
		);
	};
	const lat = you.latitude;
	const lon =  you.longitude;
	const getLocations = () => {
		axios.get(`${ backendURL }/api/locations/radius/${ radius }/${ lat }/${ lon }`)
			.then(res => setLocations([ you, ...res.data ]))
			.catch(err => console.error(err));
	};
	const addLocationsToMap = () => {
		if (map && locations.length) {
			for (const location of locations) {
				const lngLat = [ location.latitude, location.longitude ];
				new mapboxgl.Marker()
				.setLngLat(lngLat)
				.setPopup(
					new mapboxgl.Popup({offset: popupOffsets, className: 'popup'})
						.setLngLat(lngLat)
						.setHTML(Popup(location))
						.setMaxWidth("300px")
				)
				.addTo(map);
			}
			let leftUpperBounds = [ locations[0].latitude, locations[0].longitude ];
			let rightLowerBounds = [ locations[1].latitude, locations[1].longitude ];
			locations.forEach(location => {
				const lngLat = [ location.latitude, location.longitude ];
				if (lngLat[0] < rightLowerBounds[0]) rightLowerBounds[0] = lngLat[0];
				if (lngLat[1] > rightLowerBounds[1]) rightLowerBounds[1] = lngLat[1];
				if (lngLat[0] > leftUpperBounds[0]) leftUpperBounds[0] = lngLat[0];
				if (lngLat[1] < leftUpperBounds[1]) leftUpperBounds[1] = lngLat[1];
			});
			const bbox = [ leftUpperBounds, rightLowerBounds ];
			map.fitBounds(bbox, { padding: { top: 25, bottom: 15, left: 15, right: 15 }});
		}
	};
	useEffect(getLocations, []);
	useEffect(getMap, []);
	useEffect(addLocationsToMap, [ locations ]);
	return(
		<div style = {{ height: '100vh' }} id = 'map' />
	);
};

export default Map;
