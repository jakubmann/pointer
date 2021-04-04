import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from '../styles'
import AppButton from './AppButton'
import colors from '../config/colors'

const AddAction = ({navigate}) => {
    return (
        <TouchableOpacity onPress={() => navigate('Create Action')}>
            <View style={[styles.actions.action, {backgroundColor: colors.placeholder}]}>
                <Text style={{fontSize: 30, color: colors.text, textAlign: 'center'}}>+</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddAction

