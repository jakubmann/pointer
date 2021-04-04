import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import AppButton from '../components/AppButton'
import styles from '../styles'

import colors from '../config/colors'


const ActionTypeSelector = ({ type, selectType }) => {
    return (
        <View style={styles.selector.selector}>
            <TouchableOpacity
                onPress={() => selectType('add')}
                style={[{
                    backgroundColor: type === 'add' ? colors.green : colors.disabled 
                }, styles.selector.left]} 
            >
                <Text style={styles.selector.text}>Add points</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => selectType('remove')}
                style={[{
                    backgroundColor: type === 'remove' ? colors.red : colors.disabled 
                }, styles.selector.right]} 
            >
                <Text style={styles.selector.text}>Remove Points</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionTypeSelector