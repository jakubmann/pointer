import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import {useSelector} from 'react-redux'
import styles from '../styles'

import HistoryItem from './HistoryItem'

const History = () => {
    const history = useSelector(state => state.points.history)
    useEffect(() => {
        console.log(history)
    })
    const historyItem = ({item}) => {
        return (
            <HistoryItem
                points={item.points}
                goal={item.goal}
                date={item.date}
            />
        )
    }

    return (
        <View style={styles.history.container}>
            <FlatList
                style={history.list}
				data={history}
				renderItem={historyItem}
				keyExtractor={h => h.date}
                inverted={true}
            />
        </View>
    )
}

export default History