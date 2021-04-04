import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import store from './store'

import Home from './screens/Home'
import Total from './screens/Total'
import CreateAction from './screens/CreateAction'

const Stack = createStackNavigator()

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Total" component={Total} />
					<Stack.Screen name="CreateAction" component={CreateAction} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App