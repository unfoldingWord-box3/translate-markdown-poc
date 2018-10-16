import React from 'react'
import { index } from '../index'

describe('index', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <index />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
