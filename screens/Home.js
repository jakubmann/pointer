import React, { useEffect } from 'react'
import { Button, SafeAreaView, Text, FlatList} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import styles from '../styles'

import PerformAction from '../components/PerformAction'
import AppButton from '../components/AppButton'
import AddAction from '../components/AddAction'

const Home = ({ navigation }) =>  {
	const dispatch = useDispatch()
	const actions = useSelector(state => state.points.actions)

	const navigate = navigation.navigate

	useEffect(() => {
		console.log(actions)
	})

	const actionItem = ({ item }) => (
		<PerformAction
			name={item.name}
			points={item.points}
			type={item.type}
			dispatch={dispatch}
		/>
	)

	return (
		<SafeAreaView style={styles.container}>
			{/*
			<Button style={styles.button} title="Add point" onPress={() => dispatch(increment())} />
			<Button style={styles.button} title="Remove point" onPress={() => dispatch(decrement())} />
			*/}
			<FlatList
				style={styles.actions.list}
				data={actions}
				renderItem={actionItem}
				keyExtractor={action => action.name}
				ListFooterComponent={<AddAction navigate={navigate}/>}
			/>
			<AppButton title="Total" onPress={() => navigation.navigate('Total')} />

		</SafeAreaView>
	)
}

export default Home