import React, { useState } from 'react'
import { 
  Platform, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Text,
  View 
} from 'react-native'
// import Constants from 'expo-constants'
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer'
import { FocusHistory } from './src/features/FocusHistory'

export default function App() {
  const [ currentSubject, setCurrentSubject ] = useState(null)
  const [ history, setHistory ] = useState([])
  
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </> : 
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
