import React from 'react'
import { Content } from '../Content'

describe('Content', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Content />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
