import React from 'react'
import { View, Text } from 'react-native'

const PerformAction = props => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.points}</Text>
        </View>
    )
}

export default PerformAction