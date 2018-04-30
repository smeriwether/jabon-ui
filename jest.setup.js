import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.shallow = shallow;
global.render = render;
global.context = describe;

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = jsdom.window;
