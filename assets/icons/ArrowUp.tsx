import React from 'react'
import { ArrowUpSquare } from 'react-native-iconly'

const ArrowUp = (props:any) => {

  let { color } = props    
  
  return (
    <ArrowUpSquare set="bold" stroke='bold' primaryColor={color} />
  )
}

export default ArrowUp