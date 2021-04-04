import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaView, Text, Button, TextInput, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux' 
import { createAction } from '../pointsSlice'
import styles from '../styles'

const CreateAction = ({ navigation }) => {
    const [actionName, setActionName] = useState('')
    const [actionPoints, setActionPoints] = useState(0)
    const dispatch = useDispatch()

    const makeAction= () => {
        dispatch(createAction({
            name: actionName,
            points: actionPoints
        }))
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Create action</Text>
            <TextInput
                style={styles.input} 
                value={actionName}
                onChangeText={setActionName}
                placeholder="Action name"
            />
            <TextInput
                style={styles.input}
                value={actionPoints} 
                onChangeText={setActionPoints}
                keyboardType="numeric"
                placeholder="Action points"
            />
            <Button style={styles.button} title={'Create ' + actionName} onPress={() => makeAction()} />
        </SafeAreaView>
    )
}

export default CreateAction