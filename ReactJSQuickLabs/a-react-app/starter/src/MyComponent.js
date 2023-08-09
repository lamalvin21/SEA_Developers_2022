import React from 'react'
import AnotherComponent from './AnotherComponent'
import MyClassComponent from './MyClassComponent'
import ComponentWithProps from './ComponentWithProps'

const MyComponent = () => {
  return (
    <>
      <ComponentWithProps/>
      <ComponentWithProps header='Header Param' content='Content Param' number={50}/>
      <AnotherComponent/>
      <h1>Hello World</h1>
      <MyClassComponent/>
    </>
  )
}

export default MyComponent