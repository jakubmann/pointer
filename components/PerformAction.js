import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../config/colors'
import { performAction } from '../pointsSlice'
import styles from '../styles'

const PerformAction = props => {
    return (
        <TouchableOpacity onPress={() => props.dispatch(performAction(props.name))}>
            <View style={[styles.actions.action, {backgroundColor: props.type === 'add' ? colors.green : colors.red}]}>
                <Text style={styles.actions.actionName}>{props.name}</Text>
                <Text style={styles.actions.actionPoints}>{props.type === 'add' ? '+' : '-'}{props.points}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PerformAction