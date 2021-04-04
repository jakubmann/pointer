import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styles from '../styles'

const Total = (props) => {
    return (
        <SafeAreaView style={styles.common.container}>
            <Text style={styles.common.text}>TOTAL POINTS: {useSelector(state => state.points.value)}</Text>
        </SafeAreaView>
    )
}

export default Total