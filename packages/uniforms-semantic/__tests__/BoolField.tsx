import React from 'react';
import { BoolField } from 'uniforms-semantic';

import createContext from './_createContext';
import mount from './_mount';

test('<BoolField> - renders an input', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
});

test('<BoolField> - renders a input with correct id (inherited)', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('id')).toBeTruthy();
});

test('<BoolField> - renders a input with correct id (specified)', () => {
  const element = <BoolField name="x" id="y" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('id')).toBe('y');
});

test('<BoolField> - renders a input with correct name', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('name')).toBe('x');
});

test('<BoolField> - renders an input with correct type', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('type')).toBe('checkbox');
});

test('<BoolField> - renders an input with correct disabled state', () => {
  const element = <BoolField name="x" disabled />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('disabled')).toBe(true);
});

test('<BoolField> - renders an input with correct readOnly state', () => {
  const onChange = jest.fn();

  const element = <BoolField name="x" readOnly />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Boolean } }, { onChange }),
  );

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').simulate('change')).toBeTruthy();
  expect(onChange).not.toHaveBeenCalled();
});

test('<BoolField> - renders a input with correct label (specified)', () => {
  const element = <BoolField name="x" label="BoolFieldLabel" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('label').text()).toBe('BoolFieldLabel');
  expect(wrapper.find('label').prop('htmlFor')).toBe(
    wrapper.find('input').prop('id'),
  );
});

test('<BoolField> - renders a input with correct value (default)', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('checked')).toBe(false);
});

test('<BoolField> - renders a input with correct value (model)', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Boolean } }, { model: { x: true } }),
  );

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('checked')).toBe(true);
});

test('<BoolField> - renders a input with correct value (specified)', () => {
  const element = <BoolField name="x" value />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').prop('checked')).toBe(true);
});

test('<BoolField> - renders a input which correctly reacts on change', () => {
  const onChange = jest.fn();

  const element = <BoolField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Boolean } }, { onChange }),
  );

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').simulate('change')).toBeTruthy();
  expect(onChange).toHaveBeenLastCalledWith('x', true);
});

test('<BoolField> - renders a input which correctly reacts on change', () => {
  const onChange = jest.fn();

  const element = <BoolField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Boolean } }, { onChange }),
  );

  expect(wrapper.find('input')).toHaveLength(1);
  expect(wrapper.find('input').simulate('change')).toBeTruthy();
  expect(onChange).toHaveBeenLastCalledWith('x', true);
});

test('<BoolField> - renders a wrapper with unknown props', () => {
  const element = <BoolField name="x" data-x="x" data-y="y" data-z="z" />;
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.find('div').at(0).prop('data-x')).toBe('x');
  expect(wrapper.find('div').at(0).prop('data-y')).toBe('y');
  expect(wrapper.find('div').at(0).prop('data-z')).toBe('z');
});

test('<BoolField> - renders correct error text (specified)', () => {
  const error = new Error();
  const element = (
    <BoolField name="x" error={error} showInlineError errorMessage="Error" />
  );
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.children().last().text()).toBe('Error');
});

test('<BoolField> - renders correct error text (showInlineError=false)', () => {
  const error = new Error();
  const element = (
    <BoolField
      name="x"
      error={error}
      showInlineError={false}
      errorMessage="Error"
    />
  );
  const wrapper = mount(element, createContext({ x: { type: Boolean } }));

  expect(wrapper.children().last().text()).not.toBe('Error');
});

test('<BoolField> - renders with a custom wrapClassName', () => {
  const element = <BoolField name="x" wrapClassName="test-class-name" />;
  const wrapper = mount(element, createContext({ x: { type: String } }));

  expect(wrapper.find('.ui.test-class-name')).toHaveLength(1);
});

test('<BoolField> - renders with a `fitted` className when `label` is disabled', () => {
  const element = <BoolField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: String } }));

  const found = wrapper.find('.ui');
  expect(found.hasClass('fitted')).toEqual(true);
});

test('<BoolField> - renders without a `fitted` className when `label` is enabled', () => {
  const element = <BoolField name="x" label />;
  const wrapper = mount(element, createContext({ x: { type: String } }));

  const found = wrapper.find('.ui');
  expect(found.hasClass('fitted')).toEqual(false);
});
