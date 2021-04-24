import React, {useEffect, useState} from 'react'
import {Modal, Text, TextInput, View} from 'react-native'
import styles from '../styles'
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { setNewGoal } from '../slices/pointsSlice'
import { BlurView } from 'expo-blur'

const SetGoal = ({visible, closeModal}) => {
    const g = useSelector(state => state.points.goal)
    const [goal, setGoal] = useState()
    const dispatch = useDispatch()
    
    useEffect(() => {
        setGoal(g.toString())
    }, [g])

    return (
        <Modal
            visible={visible}
            transparent={true}
            animated={true}
            animationType={'slide'}
        >
            <View style={styles.common.centeredView}>
                
                <BlurView style={[styles.common.modal, {alignItems: 'center'}]}
                    intensity={90}
                    tint={'light'}
                >
                    <Text style={styles.common.text}>Goal</Text>
                    <TextInput
                            style={[styles.common.input, {width: '70%'}]} 
                            value={goal}
                            onChangeText={setGoal}
                            placeholder="Goal"
                            placeholderTextColor={colors.placeholder}
                            keyboardType='numeric'
                            returnKeyType='done'
                    />
                    <AppButton
                        style={{backgroundColor: colors.green, paddingLeft: 20, paddingRight: 20, marginTop: 20}}
                        title='Set'
                        onPress={() => {
                            dispatch(setNewGoal(parseInt(goal)))
                            closeModal()
                        }}
                    />
                </BlurView>
            </View>
        </Modal>
    )
}

export default SetGoal