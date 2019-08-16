import React from 'react'
import {
  Text,
  View
} from 'react-native'
import {  
  createAppContainer,
  createStackNavigator, 
  createBottomTabNavigator
} from 'react-navigation'
import {
 TI,
 TII,
 TIII,
 TIV
} from '../interface/index'
import {
  isIphoneX
} from 'react-native-wui'

const TabNav = createBottomTabNavigator(
  {
    TI,
    TII,
    TIII,
    TIV
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = 'TI'
        if (routeName === 'TI') {
          iconName = 'TI'
        } else if (routeName === 'TII') {
          iconName = 'TII'
        } else if(routeName === 'TIII'){
          iconName = 'TIII'
        }else {
          iconName = 'TIV'
        }
        return (<Text>{focused?'✸':iconName}</Text>)
      },
      tabBarLabel: (({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let tabName = 'TI'
        if (routeName === 'TI') {
          tabName = 'TI'
        } else if (routeName === 'TII') {
          tabName = 'TII'
        } else if (routeName === 'TIII') {
          tabName = 'TIII'
        } else {
          tabName = 'TIV'
        }
        return (
          <Text 
            style={{ 
              fontSize: 12, 
              textAlign: 'center',
              marginBottom: isIphoneX() ? 0 : 4, 
              color: focused?'#C86DD7':'#737373'
            }}>
            {tabName}
          </Text>
        )
      })
    }),
    tabBarOptions: {
      activeTintColor: '#C86DD7',
      inactiveTintColor: '#DDDDDD'
    },
  }
)

const BottomNav = createStackNavigator({
  Home: {
    screen: TabNav,
    navigationOptions: () => ({
      header: null
    })
  }
})

export default createAppContainer(BottomNav)