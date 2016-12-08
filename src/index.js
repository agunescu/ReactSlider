import React from 'react';
import ReactDom from 'react-dom';
import Slider from './components/slider';
import Image from './components/image';

const App = () => {
    return (
        <div className='slider-wrapper'>
            <Slider loop={ true }>
                <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" />
                <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg"/>
                <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg"/>
                <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ankor-wat.jpg"/>
            </Slider>
        </div>
    )
};

// Creates an instance of App and puts it on the page (in the DOM)
ReactDom.render(<App />, document.getElementById('root'));