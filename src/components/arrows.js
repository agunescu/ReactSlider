import React from 'react';

const Arrows = ({children, loop, showNav, lastIndex, onArrowsClick}) => {
    const arrowsClasses = showNav ? 'Slider-arrows' : 'Slider-arrows Slider-arrows--noNav';

    return (
        <div className={ arrowsClasses }>
            { loop || lastIndex > 0 ?
                <button
                    className='Slider-arrow Slider-arrow--left'
                    onClick={ (event) => onArrowsClick(lastIndex - 1, event) } /> : null }
            { loop || lastIndex < children.length - 1 ?
                <button
                    className='Slider-arrow Slider-arrow--right'
                    onClick={ (event) => onArrowsClick(lastIndex + 1, event) } /> : null }
        </div>
    );
};

export default Arrows;