import React from 'react'
import WorkspaceContainer from '../WorkspaceContainer'

describe('WorkspaceContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <WorkspaceContainer test="test" />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type().name).to.eql('AltContainer')
  })

  it('should add the correct store', () => {
    expect(component.prop('store').displayName).to.eql('WorkspaceStore')
  })

  it('should render the component with props', () => {
    const Workspace = component.find('Workspace')

    expect(Workspace).to.have.prop('test', 'test')
  })
})
