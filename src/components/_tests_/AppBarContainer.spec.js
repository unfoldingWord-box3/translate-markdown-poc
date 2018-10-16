import React from 'react'
import AppBarContainer from '../AppBarContainer'

describe('AppBarContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <AppBarContainer test="test" />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type().name).to.eql('AltContainer')
  })

  it('should add the correct store', () => {
    expect(component.prop('store').displayName).to.eql('Store')
  })

  it('should render the component with props', () => {
    const AppBar = component.find('AppBar')

    expect(AppBar).to.have.prop('test', 'test')
  })
})
