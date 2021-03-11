import React from 'react'
import renderer from 'react-test-renderer'
import appCover from './appCover'

describe('Given an AppCover function', () => {
  describe('When calling it', () => {
    test('Then it will return a <safeAreaView>', () => {
      const tree = renderer.create(<appCover />).toJSON()
      expect(tree.children.length).toBe(1)
    })
  })
})
