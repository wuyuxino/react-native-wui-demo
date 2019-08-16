import React from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import { 
  SafeAreaView
} from 'react-navigation' 
import {
  Warticle,
  Wcard,
  Wcardone,
  Wcategory,
  Wcode,
  Wcomment,
  Wdate,
  Wgradual,
  Wheader,
  Whelp,
  WimageCard,
  Wloading,
  Wmessage,
  Wlogin,
  Wregister,
  Wpsbox,
  Wquantity,
  Wsearch,
  Wspinner,
  Wswitch,
  Wtab,
  WtimeSelect,
  Wtips,
  Wtitle
} from 'react-native-wui'

class TI extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    return(
      <SafeAreaView>
        <ScrollView 
          showsVerticalScrollIndicator={false}>
          <Warticle/>
          <Wcard/>
          <Wcardone/>
          <Wcategory/>
          <Wcomment/>
          <Wdate/>
          <Wheader/>
          <Whelp/>
          <WimageCard/>
          <Wloading/>
          <Wquantity/>
          <Wsearch/>
          <Wspinner/>
          <Wswitch/>
          <Wtab/>
          <WtimeSelect/>
          <Wtitle/>
          <View style={{height:60,width:'100%'}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TI