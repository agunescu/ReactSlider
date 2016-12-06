import React from 'react';
import ReactDom from 'react-dom';
import Slider from './components/slider';

const App = () => {
    return (
        <div className='slider-wrapper'>
            <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" />
            <Slider loop={ true }>
                <img src="austin-fireworks.jpg" />
                <img src="taj-mahal_copy.jpg"/>
                <img src="ibiza.jpg"/>
                <img src="ankor-wat.jpg"/>
            </Slider>
        </div>
    )
};

// Creates an instance of App and puts it on the page (in the DOM)
ReactDom.render(<App />, document.getElementById('root'));