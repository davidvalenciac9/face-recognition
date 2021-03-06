import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import android from './android.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner">
 					<img alt='logo' src={android}/>
 				</div>
			</Tilt>
		</div>
	)
}

export default Logo;