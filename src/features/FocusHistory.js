import React, { useState } from 'react'
import { 
  FlatList,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import { colors } from '../utils/colors'

export const FocusHistory = ({ history }) => {

  if (!history || !history.length) 
    return <Text>We haven't focused on anything yet!</Text>

  const renderItem = ({item}) => 
    <Text style={styles.item}>• {item}</Text>

  return (
    <View>
      <Text style={styles.title}>Things we focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    color: colors.white,
    paddingTop: 8,
  },
  title: {
    color: colors.white
  }
})