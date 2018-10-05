import React from 'react'
import { Block } from '../Block'

describe('Block', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <Block />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
