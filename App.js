/**
 * 项目入口 （ios or android）
 */
import React from 'react'
import { AsyncStorage } from 'react-native'
import Nav from './application/navigation/index'

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
      <Nav/>
    );
  }
}
