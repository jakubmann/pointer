import React, {useState} from 'react'
import Goal from '../components/Goal'
import SetGoal from '../modals/SetGoal'
import { SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styles from '../styles'
import colors from '../config/colors'
import History from '../components/History'

const Total = (props) => {
    const points = useSelector(state => state.points.value)
    const goal = useSelector(state => state.points.goal)
    const [modalVisible, setModalVisible] = useState(false)
    const pointsAchieved = points >= goal ? true : false

    return (
        <SafeAreaView style={styles.common.container}>
            <SetGoal visible={modalVisible} closeModal={() => setModalVisible(false)}/>
            <Text style={[styles.common.text, {fontSize: 40}, {color: pointsAchieved ? colors.green : colors.red}]}>{points} / {goal}</Text>
            <Goal openModal={() => setModalVisible(true)}/>
            <Text style={styles.common.text}>History</Text>
            <History />
        </SafeAreaView>
    )
}

export default Total