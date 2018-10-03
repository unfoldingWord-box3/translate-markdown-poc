import React from 'react'
import { Layout } from '../Layout'

describe('Layout', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Layout />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
