import React from 'react'
import FileManagerContainer from '../FileManagerContainer'

describe('FileManagerContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <FileManagerContainer test="test" />
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
    const FileManager = component.find('FileManager')

    expect(FileManager).to.have.prop('test', 'test')
  })
})
