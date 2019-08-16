import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { 
  SafeAreaView
} from 'react-navigation' 

class TI extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    return(
      <SafeAreaView>
        <Text>TI</Text>
      </SafeAreaView>
    )
  }
}

export default TI