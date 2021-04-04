import React, { useEffect } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { performAction } from '../pointsSlice'
import styles from '../styles'

import PerformAction from '../components/PerformAction'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({ navigation }) =>  {
    const dispatch = useDispatch()
    const actions = useSelector(state => state.points.actions)
    useEffect(() => {
        console.log(actions)
    })
    return (
        <SafeAreaView style={styles.container}>
            {/*
            <Text style={styles.text}>HOME</Text>
            */}
            <Button style={styles.button} title="Total" onPress={() => navigation.navigate('Total')} />
            <Button style={styles.button} title="Create Action" onPress={() => navigation.navigate('CreateAction')} />
            {/*
            <Button style={styles.button} title="Add point" onPress={() => dispatch(increment())} />
            <Button style={styles.button} title="Remove point" onPress={() => dispatch(decrement())} />
            */}
            {actions.map(action => {
                return (
                    <TouchableOpacity
                        onPress={() => dispatch(performAction(action.name))}
                    >    
                        <PerformAction
                            name={action.name}
                            points={action.points}
                        />
                    </TouchableOpacity>
                )
            })}
        </SafeAreaView>
    )
}

export default Home