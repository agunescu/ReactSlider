import React from 'react';

const Arrows = ({children, loop, showNav, lastIndex, onArrowsClick}) => {
    const arrowsClasses = showNav ? 'slider-arrows' : 'slider-arrows slider-arrows--noNav';

    return (
        <div className={ arrowsClasses }>
            { loop || lastIndex > 0 ?
                <button
                    className='slider-arrow slider-arrow--left'
                    onClick={ (event) => onArrowsClick(lastIndex - 1, event) } /> : null }
            { loop || lastIndex < children.length - 1 ?
                <button
                    className='slider-arrow slider-arrow--right'
                    onClick={ (event) => onArrowsClick(lastIndex + 1, event) } /> : null }
        </div>
    );
};

export default Arrows;