import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});
