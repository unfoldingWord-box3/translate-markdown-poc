import React from 'react'
import { AppBar } from '../AppBar'

describe('AppBar', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <AppBar />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
