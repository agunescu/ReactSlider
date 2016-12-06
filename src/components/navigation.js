import React from 'react';

const Navigation = ({children, lastIndex, onNavClick}) => {
    const nav = children.map((slide, i) => {
        const buttonClasses = i === lastIndex ? 'Slider-navButton Slider-navButton--active' : 'Slider-navButton';
        return (
            <button
                className={ buttonClasses }
                key={ i }
                onClick={ (event) => onNavClick(i, event) } />
        );
    });

    return (
        <div className='Slider-nav'>{ nav }</div>
    );
};

export default Navigation;