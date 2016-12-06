import React from 'react';
import ReactDom from 'react-dom';
import Slider from './components/slider';

const App = () => {
    return (
        <div className='slider-wrapper'>
            <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" />
            <Slider loop={ true }>
                <div style={{ background: '#21BB9A' }}>Test A</div>
                <div style={{ background: '#329ADD' }}>Test B</div>
                <div style={{ background: '#9A5CB9' }}>Test C</div>
                <div style={{ background: '#E64C3C' }}>Test D</div>
                <div style={{ background: '#2D3F52' }}>Test E</div>
            </Slider>
        </div>
    )
};

// Creates an instance of App and puts it on the page (in the DOM)
ReactDom.render(<App />, document.getElementById('root'));