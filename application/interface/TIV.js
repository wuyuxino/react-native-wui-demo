import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { 
  SafeAreaView
} from 'react-navigation' 

class TIV extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    return(
      <SafeAreaView>
        <Text>TIV</Text>
      </SafeAreaView>
    )
  }
}

export default TIV