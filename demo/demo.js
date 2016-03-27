import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GradientText } from '../src/GradientText';
import Gradient from '../node_modules/gradient/index.js';

let rainbow = Gradient('#0071bc', '#662d91', '#e5005d', 10).toArray('rgbString');
let rainbow2 = Gradient('#ff0000', '#00FF04', 20).toArray('rgbString');
let rainbow3 = Gradient('#f5f5f5', '#edc613', 20).toArray('rgbString');

const Simple = () =>
    <GradientText data='today will be a really good day' gradient={rainbow3} animating={false}>
    </GradientText>


const Header = () =>
    <GradientText data='React Gradient Text' gradient={rainbow}>
    </GradientText>

const Opacity = () =>
    <GradientText data='Change the opacity' gradient={[]} opacity={50}>
    </GradientText>

const SlowItDown = () =>
    <GradientText data='Slow it all down...' gradient={rainbow} interval={250}>
    </GradientText>

const Hoverable = () =>
    <GradientText data='On Hover' gradient={rainbow2} hoverable={true}>
    </GradientText>

const TwoColors = () =>
    <GradientText data='Two Colors' gradient={['E50003', '007AE5']} hoverable={true}>
    </GradientText>

const OnEvent = () => {
    let evt = {
        name: 'scroll',
        callback: function (e) {}
    };

    return <GradientText data='On Event' gradient={rainbow3} onEvent={evt}>
    </GradientText>
}

const demos = {
    simple: Simple,
    header: Header,
    opacity: Opacity,
    slowitdown: SlowItDown,
    hoverable: Hoverable,
    twocolors: TwoColors,
    onevent: OnEvent
};

for (let d in demos) {
    ReactDOM.render(React.createElement(demos[d]), document.getElementById(d));
}
