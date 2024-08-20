import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { colors } from '../utils/colors'

export const Focus = ({ addSubject }) => {
  const [ subject, setSubject ] = useState(null)

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Focus Feature</Text>
      <TextInput 
        label='What would you like to focus on?' 
        onChangeText={setSubject}
      />
      <Button 
        color={colors.plum}
        mode="outlined" 
        onPress={() => addSubject(subject)}
        rippleColor={colors.plum}
        style={styles.button} 
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.plum,
    margin: 'auto',
    marginTop: 10,
    width: '50%'
  },
  inputContainer: {
    padding: 30,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});