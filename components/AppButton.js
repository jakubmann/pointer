import React, { useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

const AppButton = ({onPress, title, style}) => {
    const buttonStyle = [styles.common.button]
    style ? buttonStyle[1] = style : null 
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={styles.common.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton