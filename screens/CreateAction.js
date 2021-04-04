import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaView, Text, Button, TextInput, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux' 
import { createAction } from '../pointsSlice'
import styles from '../styles'
import ActionTypeSelector from '../components/ActionTypeSelector'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

const CreateAction = ({ navigation }) => {
    const [actionName, setActionName] = useState('')
    const [actionPoints, setActionPoints] = useState('')
    const [actionType, setActionType] = useState('add')
    const dispatch = useDispatch()

    const makeAction= () => {
        dispatch(createAction({
            name: actionName,
            points: actionPoints,
            type: actionType,
        }))
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.common.container}>
            <Text style={styles.common.text}>Create action</Text>
            <TextInput
                style={styles.common.input} 
                value={actionName}
                onChangeText={setActionName}
                placeholder="Action name"
                placeholderTextColor={colors.placeholder}
            />
            <TextInput
                style={[styles.common.input, {marginTop: 10}]}
                value={actionPoints} 
                onChangeText={setActionPoints}
                keyboardType="numeric"
                placeholder="Action points"
                placeholderTextColor={colors.placeholder}
            />
            <ActionTypeSelector type={actionType} selectType={setActionType}/>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <AppButton style={{backgroundColor: colors.green}} title="Create Action" onPress={() => makeAction()} />
                <AppButton style={{backgroundColor: colors.red, marginTop: 10}} title="Cancel" onPress={() => navigation.navigate('Home')}/>
            </View>
        </SafeAreaView>
    )
}

export default CreateAction