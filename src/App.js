import { StackNavigator, TabNavigator } from 'react-navigation'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Splash from './components/Splash'
import TabDetail from './components/TabDetail'

const TabsNav = TabNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    inactiveTintColor: 'gray',
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
  },
})

const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash
  },
  Root: {
    screen: TabsNav,
  },
  TabDetail: {
    screen: TabDetail,
  },
})

export default AppNavigator