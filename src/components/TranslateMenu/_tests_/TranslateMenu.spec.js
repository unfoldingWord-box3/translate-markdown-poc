import React from 'react'
import { TranslateMenu } from '../TranslateMenu'

describe('TranslateMenu', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <TranslateMenu />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
