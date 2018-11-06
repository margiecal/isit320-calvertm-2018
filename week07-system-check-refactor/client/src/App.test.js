import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });

describe('rest basic tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders h1 header test', () => {
        const wrapper = shallow(<App/>);
        console.log("TESTER", wrapper.find('h1').debug());
    });


    it('renders h1 header', () => {
        const wrapper = shallow(<App/>);
        const unknown = <h1>System Check</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        console.log(wrapper.find('h1').debug());
        expect(wrapper.contains(unknown)).toEqual(true);
    });

});
