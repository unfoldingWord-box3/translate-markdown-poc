import React from 'react'
import { Workspace } from '../Workspace'

describe('Workspace', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <Workspace />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
