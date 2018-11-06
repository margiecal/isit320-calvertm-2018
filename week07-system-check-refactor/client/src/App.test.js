import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './ElfHeader';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('rest basic tests', function() {



    it('renders h1 header test', () => {
        const wrapper = shallow(<App/>);
        console.log("TESTER", wrapper.find('h1').debug());
    });


    it('renders h1 header', () => {
        const wrapper = shallow(<ElfHeader/>);
        console.log(wrapper.debug());
        const unknown = <h1>System Check</h1>;
        elfDebugEnzyme.getLast(wrapper, 'ElfHeader', true);
        console.log(wrapper.find('h1').debug());
        expect(wrapper.contains(unknown)).toEqual(true);
    });

});
