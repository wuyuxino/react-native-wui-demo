import React from 'react'
import {
  TI,
  TII,
  TIII,
  TIV
} from '../interface/index'
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems, 
  SafeAreaView
} from 'react-navigation'
import { 
  Text,
  View,
  Dimensions, 
  ScrollView, 
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')

const CustomDrawerContentComponent = (props) => (
  <LinearGradient colors={['rgb(55,34,37)', 'rgb(113,71,60)', 'rgb(40,30,37)']}>
  <View style={{width:'100%',height}}>
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <SafeAreaView 
        style={styles.container} 
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <View
          style={{width:'100%',height:50,paddingLeft:16,justifyContent:'center'}}>
          <Text 
            style={{fontSize:20,fontWeight:'500',color:'#ccc'}}>
            主菜单
          </Text>
        </View>
        {
          ['TI','TII','TIII','TIV'].map((item,index)=>{
            return(
              <TouchableOpacity
                onPress={()=>{
                  props.navigation.navigate(item)
                  props.navigation.closeDrawer()
                }}
                style={{width:'100%',height:50,paddingLeft:16,justifyContent:'center'}}>
                <Text 
                  style={{
                    fontSize:18,
                    fontWeight:'500',
                    color:props.activeItemKey===item?'rgb(251,80,85)':'#fff'
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )
          })
        }
        {/* <DrawerItems 
          activeTintColor="rgb(251,80,85)"
          inactiveTintColor="#fff"
          activeLabelStyle={{fontSize:18}}
          inactiveLabelStyle={{fontSize:18}}
          {...props} /> */}
      <View
        style={{
          width:'100%',
          height:50,
          marginTop:50,
          paddingLeft:16,
          justifyContent:'center'
        }}>
        <Text 
          style={{fontSize:20,fontWeight:'500',color:'#ccc'}}>
          分类菜单
        </Text>
      </View>
      {
        ['分类一','分类二','分类三','分类四','分类五'].map((item,index)=>{
          return(
            <TouchableOpacity
              onPress={()=>{
                props.navigation.navigate(item,{country:item})
                props.navigation.closeDrawer()
              }}
              style={{width:'100%',height:50,paddingLeft:16,justifyContent:'center'}}>
              <Text 
                style={{
                  fontSize:18,
                  fontWeight:'500',
                  color:props.activeItemKey===item?'rgb(251,80,85)':'#fff'
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        })
      }
      {/* user */}
      <View
        style={{
          width:'100%',
          height:50,
          marginTop:50,
          paddingLeft:16,
          justifyContent:'center'
        }}>
        <Text 
          style={{
            fontSize:20,
            fontWeight:'500',
            color:'#ccc'
          }}>
          个人中心
        </Text>
      </View>
      {
        ['我的'].map((item,index)=>{
          return(
            <TouchableOpacity
              onPress={()=>{
                props.navigation.navigate('Personal')
                props.navigation.closeDrawer()
              }}
              style={{width:'100%',height:50,paddingLeft:16,justifyContent:'center'}}>
              <Text 
                style={{
                  fontSize:18,
                  fontWeight:'500',
                  color:props.activeItemKey===item?'rgb(251,80,85)':'#fff'
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        })
      }
      </SafeAreaView>
    </ScrollView>
  </View>
  </LinearGradient>
)

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TI
  }
},
{
  drawerWidth:width*.7,
  drawerPosition:'left',
  contentComponent:CustomDrawerContentComponent,
  // order:['Home','Favorites','ShoppingList','Recomendation','NewRecipes']
}
)

const SketchRouter = createStackNavigator(
  {
    Home:{
      screen: MyDrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        header:null
      })
    },
    TII:{
      screen: TII
    },
    TIII:{
      screen: TIII
    },
    TIV:{
      screen: TIV
    }
  },
  {
    headerBackTitleVisible:false
  }
)

const SideNav = createAppContainer(SketchRouter)

export default SideNav

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})