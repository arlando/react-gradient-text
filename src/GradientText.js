import React from 'react';

class GradientText extends React.Component {

    static propTypes = {
        data: React.PropTypes.string.isRequired,
        gradient: React.PropTypes.array,
        interval: React.PropTypes.number,
        hoverable: React.PropTypes.bool,
        onEvent: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            callback: React.PropTypes.func.isRequired
        }),
        animating: React.PropTypes.bool,
        opacity: React.PropTypes.number
    };

    static defaultProps = {
        gradient: [],
        opacity: 100,
        interval: 50,
        hoverable: false,
        animating: true
    };

    constructor (props) {
        super(props);

        this.state = {
            elasped: 0,
            hover: false
        };

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.timer = setInterval(function (){ this.tick() }.bind(this), this.props.interval);
    }

    componentWillMount() {
        // animating prop - should gradient be animated or one time fling
        if (!this.props.animating) clearInterval(this.timer);

        if (this.props.hoverable) {
            // clear interval and only update elasped when hovering
            clearInterval(this.timer);
        }

        if (this.props.onEvent) {
            clearInterval(this.timer);

            this.bound = function (e) { this.boundEvent(e); }.bind(this);
            if (window.addEventListener) window.addEventListener(this.props.onEvent.name, this.bound, false);
            else if (window.attachEvent) window.attachEvent(this.props.onEvent.name, this.bound)
        }
    }

    componentWillUnmount() {

        clearInterval(this.timer);

        clearInterval(this.mouseOverTimer);

        if (this.props.onEvent) {
            if (window.removeEventListener) window.removeEventListener(this.props.onEvent.name, this.bound, false);
            if (window.detachEvent) window.detachEvent(this.props.onEvent.name, this.bound)
        }
    }

    mouseOver() {

        if (this.props.hoverable) {
            this.mouseOverTimer = setInterval(function (){ this.tick() }.bind(this), this.props.interval);

            this.setState({
                hover: true,
                elasped: (this.state.elasped + 1)
            })
        }
    }

    mouseOut() {

        if (this.props.hoverable) {
            clearInterval(this.mouseOverTimer);

            this.setState({ hover: false })
        }
    }

    boundEvent(e) {

        this.setState({
            elasped: (this.state.elasped + 1)
        });

        this.props.onEvent.callback(e);
    }

    tick() {
        this.setState({
            elasped: (this.state.elasped + 1)
        });
    }

    shouldComponentUpdate(nextProps) {
        if (this.state.elasped === 0) return true;
        if (nextProps.hoverable && this.state.hover === true) return true;
        else if (nextProps.hoverable && this.state.hover === false) return false;
        return true;
    }

    render() {

        let colors;

        const { data, gradient } = this.props;

        if (data === '') return false;

        // gradient may be a key to gradients store
        if (typeof gradient === 'string') colors = gradients[gradient];
        // hope that gradient is an array of colors
        else colors = gradient;

        const lengthOfColors = colors.length;

        let chars = this.props.data.split('');
        let charsLength = chars.length;

        // accumulates attribute mapping based on objects
        let ops = {

            store: [],

            add(fn) {
                this.store.push(fn)
            },

            run (char, i) {
                let accum = {};
                this.store.forEach(fn => {
                   fn(char, i, accum);
                });
                return accum;
            }
        };

        // opacity mapping
        if (this.props.opacity !== 100) {
            ops.add((char, i, styles) => {
                styles.opacity = ((i + this.state.elasped) % charsLength) / charsLength;
            });
        }

        // color mapping
        if (lengthOfColors === 1) {
            ops.add((char, i, styles) => {
                styles.color = colors[0];
            });
        } else if (lengthOfColors > 1) {
            ops.add((char, i, styles) => {
                styles.color = colors[(i + this.state.elasped) % lengthOfColors]
            });
        }

        chars = chars.map((char, i) => {
            let style = ops.run(char, i);
            return <span key={i} style={style}>{char}</span>;
        });

        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                {chars}
            </div>
        );
    }
}

export { GradientText };