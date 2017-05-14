import { mount } from 'enzyme';
import { renderField } from 'utils';

describe('renderField', () => {
  const setup = props => {
    const wrapper = mount(renderField(props));

    return {
      wrapper,
      formGroup: wrapper.find('.form-group'),
      label: wrapper.find('label'),
      input: wrapper.find('input'),
      formText: wrapper.find('.form-text'),
    };
  };

  it('renders a normal field', () => {
    const data = {
      input: {
        name: 'name',
      },
      meta: {
        touched: false,
        error: false,
        warning: false,
      },
      type: 'text',
      label: 'Name',
    };

    const { wrapper, formGroup, label, input, formText } = setup(data);

    expect(formGroup.props()).not.toContain('color');
    expect(label.text()).toContain('Name');
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('name');
    expect(formText.exists()).toBe(false);
  });

  it('renders a field with an error', () => {
    const data = {
      input: {
        name: 'name',
      },
      meta: {
        touched: true,
        error: 'This is an error',
        warning: false,
      },
      type: 'text',
      label: 'Name',
    };

    const { formGroup, input, formText } = setup(data);

    expect(formGroup.hasClass('has-danger')).toBe(true);
    expect(input.hasClass('form-control-danger')).toBe(true);
    expect(formText.text()).toContain('This is an error');
  });

  it('renders a field with a warning', () => {
    const data = {
      input: {
        name: 'name',
      },
      meta: {
        touched: true,
        error: false,
        warning: 'This is a warning',
      },
      type: 'text',
      label: 'Name',
    };

    const { formGroup, input, formText } = setup(data);

    expect(formGroup.hasClass('has-warning')).toBe(true);
    expect(input.hasClass('form-control-warning')).toBe(true);
    expect(formText.text()).toContain('This is a warning');
  });

  it('does not render error or warning if not touched', () => {
    const data = {
      input: {
        name: 'name',
      },
      meta: {
        touched: false,
        error: 'This is an error',
        warning: 'This is a warning',
      },
      type: 'text',
      label: 'Name',
    };

    const { formGroup, input, formText } = setup(data);

    expect(formGroup.hasClass('has-warning')).toBe(false);
    expect(formGroup.hasClass('has-danger')).toBe(false);
    expect(input.hasClass('form-control-warning')).toBe(false);
    expect(input.hasClass('form-control-danger')).toBe(false);
    expect(formText.exists()).toBe(false);
  });
});
