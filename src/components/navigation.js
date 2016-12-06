import React from 'react';

const Navigation = ({children, lastIndex, onNavClick}) => {
    const nav = children.map((slide, i) => {
        const buttonClasses = i === lastIndex ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
        return (
            <button
                className={ buttonClasses }
                key={ i }
                onClick={ (event) => onNavClick(i, event) } />
        );
    });

    return (
        <div className='slider-nav'>{ nav }</div>
    );
};

export default Navigation;