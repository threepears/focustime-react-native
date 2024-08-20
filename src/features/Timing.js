import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { colors } from '../utils/colors'

export const Timing = ({ onChangeTime }) => {


  return (
    <View style={styles.timingButton}>
      <Button 
        color={colors.plum}
        mode="outlined" 
        onPress={() => onChangeTime(10)}
        rippleColor={colors.plum}
        style={styles.button} 
      >
        10
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})