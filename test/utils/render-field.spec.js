import { expect } from 'chai'
import { mount } from 'enzyme'
import { renderField } from 'utils'

describe('renderField', () => {
  const setup = (props) => {
    const wrapper = mount(renderField(props))

    return {
      wrapper,
      formGroup: wrapper.find('.form-group'),
      label: wrapper.find('label'),
      input: wrapper.find('input'),
      formText: wrapper.find('.form-text'),
    }
  }

  it('renders a normal field', () => {
    const data = {
      input: {
        name: 'name'
      },
      meta: {
        touched: false,
        error: false,
        warning: false,
      },
      type: 'text',
      label: 'Name',
    }

    const { wrapper, formGroup, label, input, formText } = setup(data)

    expect(formGroup).to.not.have.prop('color')
    expect(label).to.contain.text('Name')
    expect(input).to.have.prop('type', 'text')
    expect(input).to.have.prop('name', 'name')
    expect(formText.exists()).to.be.false
  })

  it('renders a field with an error', () => {
    const data = {
      input: {
        name: 'name'
      },
      meta: {
        touched: true,
        error: 'This is an error',
        warning: false,
      },
      type: 'text',
      label: 'Name',
    }

    const { formGroup, input, formText } = setup(data)

    expect(formGroup).to.have.className('has-danger')
    expect(input).to.have.className('form-control-danger')
    expect(formText).to.have.text('This is an error')
  })

  it('renders a field with a warning', () => {
    const data = {
      input: {
        name: 'name'
      },
      meta: {
        touched: true,
        error: false,
        warning: 'This is a warning',
      },
      type: 'text',
      label: 'Name',
    }

    const { formGroup, input, formText } = setup(data)

    expect(formGroup).to.have.className('has-warning')
    expect(input).to.have.className('form-control-warning')
    expect(formText).to.have.text('This is a warning')
  })

  it('does not render error or warning if not touched', () => {
    const data = {
      input: {
        name: 'name'
      },
      meta: {
        touched: false,
        error: 'This is an error',
        warning: 'This is a warning',
      },
      type: 'text',
      label: 'Name',
    }

    const { formGroup, input, formText } = setup(data)

    expect(formGroup).to.not.have.className('has-warning')
    expect(formGroup).to.not.have.className('has-danger')
    expect(input).to.not.have.className('form-control-warning')
    expect(input).to.not.have.className('form-control-danger')
    expect(formText.exists()).to.be.false
  })
})
