import React from 'react';
import { expect, spy } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { GradientText } from '../src/GradientText';

describe('GradientText', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<GradientText data="bar"/>);
        expect(wrapper.props().data).to.equal("bar");
        wrapper.setProps({ data: "foo" });
        expect(wrapper.props().data).to.equal("foo");
    });


    it('should have the same number of text elements as chars', () => {
        const wrapper = mount(<GradientText data="bar"/>);
        expect(wrapper.find('span').length).to.equal(3);
    });


    it('should map gradient colors to gradients', () => {
        const wrapper = mount(<GradientText data="bar" gradient={['foo', 'buzz']} />);
        expect(wrapper.props().gradient.length).to.equal(2);
        expect(wrapper.props().gradient[0]).to.equal('foo');
        expect(wrapper.props().gradient[1]).to.equal('buzz');
    });


    it('should update state on hover when hoverable', () => {
        const wrapper = mount(<GradientText data="bar" hoverable={true}/>);
        wrapper.find('div').simulate('mouseOver');
        expect(wrapper.state().hover).to.equal(true);
        wrapper.find('div').simulate('mouseOut');
        expect(wrapper.state().hover).to.equal(false);
    });

    it('should not update elasped if not animating', (done) => {
        const wrapper = mount(<GradientText data="bar" animating={false} interval={1} />);
        setTimeout(function () {
            expect(wrapper.state().elasped).to.equal(0)
            done();
        }, 5)
    });

    // todo evt test
});