import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Navigation from './navigation';
import Arrows from './arrows';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dragStart: 0,
            index: 0,
            lastIndex: 0,
            transition: false
        }
    }

    /**
     * loop: false - Should arrow navigation loop around
     * selected: 0 - Slide to be selected
     * showArrows: true - Show arrows navigation
     * showNav: true - Show pager navigation
     *
     * @type {{loop: boolean, selected: number, showArrows: boolean, showNav: boolean}}
     */
    static defaultProps = {
        loop: false,
        selected: 0,
        showArrows: true,
        showNav: true
    };

    componentWillMount() {
        const { selected } = this.props;

        this.setState({
            index: selected,
            lastIndex: selected,
        });
    }

    componentWillReceiveProps(nextProps) {
        const { selected } = this.props;

        if (selected !== nextProps.selected) {
            this.goToSlide(nextProps.selected);
        }
    }

    static getDragX(event, isTouch) {
        return isTouch ?
            event.touches[0].pageX :
            event.pageX;
    }

    handleDragStart(event, isTouch) {
        const x = this.constructor.getDragX(event, isTouch);

        this.setState({
            dragStart: x,
            transition: false,
            slideWidth: ReactDom.findDOMNode(this.refs.slider).offsetWidth,
        });
    }

    handleDragMove(event, isTouch) {
        const {
            dragStart,
            lastIndex,
            slideWidth,
        } = this.state;

        const x = this.constructor.getDragX(event, isTouch);
        const offset = dragStart - x;
        const percentageOffset = offset / slideWidth;
        const newIndex = lastIndex + percentageOffset;
        const SCROLL_OFFSET_TO_STOP_SCROLL = 30;

        // Stop scrolling if you slide more than 30 pixels
        if (Math.abs(offset) > SCROLL_OFFSET_TO_STOP_SCROLL) {
            event.stopPropagation();
            event.preventDefault();
        }

        this.setState({
            index: newIndex,
        });
    }

    handleDragEnd() {
        const {
            children,
        } = this.props;

        const {
            index
        } = this.state;

        let newIndex = Math.round(index);

        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= children.length) {
            newIndex = children.length - 1;
        }

        this.setState({
            dragStart: 0,
            index: newIndex,
            lastIndex: newIndex,
            transition: true,
        });
    }

    goToSlide = (index, event) => {
        const {
            children,
            loop,
        } = this.props;

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (index < 0) {
            index = loop ? children.length - 1 : 0;
        } else if (index >= children.length) {
            index = loop ? 0 : children.length - 1;
        }

        this.setState({
            index: index,
            lastIndex: index,
            transition: true
        })
    };

    render() {
        const {
            children,
            showArrows,
            showNav,
        } = this.props;

        const {
            index,
            transition,
        } = this.state;

        const slidesStyles = {
            width: `${ 100 * children.length }%`,
            height: `100%`,
            transform: `translateX(${ -1 * index * (100 / children.length) }%)`,
        };
        const slidesClasses = transition ? 'slider-slides slider-slides--transition' : 'slider-slides';

        return (
            <div className='slider' ref='slider'>
                { showArrows ? <Arrows {...this.props} lastIndex={this.state.lastIndex} onArrowsClick={this.goToSlide}/> : null }
                { showNav ? <Navigation {...this.props} lastIndex={this.state.lastIndex} onNavClick={this.goToSlide}/> : null }

                <div
                    className='slider-inner'
                    onTouchStart={ (event) => this.handleDragStart(event, true) }
                    onTouchMove={ (event) => this.handleDragMove(event, true) }
                    onTouchEnd={ () => this.handleDragEnd(true) }>
                    <div
                        className={ slidesClasses }
                        style={ slidesStyles }>
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}