import React, { useState } from 'react'
import { 
  Platform,
  StyleSheet,
  Text, 
  Vibration,
  View 
} from 'react-native'
import { Button, ProgressBar } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'
import { Timing } from './Timing.js'
import { colors } from '../utils/colors'
import { Countdown } from '../components/Countdown'

const ONE_SECOND_IN_MS = 1000

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
]

export const Timer = ({clearSubject, focusSubject, onTimerEnd}) => {
  useKeepAwake()
  const [ isStarted, setIsStarted ] = useState(false)
  const [ progress, setProgress ] = useState(1)
  const [ minutes, setMinutes ] = useState(0.1)

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    onTimerEnd(focusSubject)
    reset()
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
          isPaused={!isStarted}  
          onProgress={setProgress} 
          onEnd={onEnd} 
        />
        <View style={styles.titleSection}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progress}>
        <ProgressBar 
          color="yellow"
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && 
          (<Button 
          color={colors.plum}
          mode="outlined" 
          onPress={() => setIsStarted(true)}
          rippleColor={colors.plum}
          style={styles.button} 
          >
            Start
          </Button>
        )}
        {isStarted && 
          (<Button 
          color={colors.plum}
          mode="outlined" 
          onPress={() => setIsStarted(false)}
          rippleColor={colors.plum}
          style={styles.button} 
          >
            Pause
          </Button>
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Timing changeTime={setMinutes} />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <Button 
          color={colors.plum}
          mode="outlined" 
          onPress={clearSubject}
          rippleColor={colors.plum}
          style={styles.button} 
        >
          -
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.plum,
    borderRadius: '50%',
    height: 100,
    marginTop: 10,
    width: 100,
  },
  buttonWrapper: {
    // flex: 0.3
  },
  clearSubjectWrapper: {
    
  },
  container: {
    flex: 1,
  },
  countdown: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'center'
  },
  progress: {
    // flex: 0.3,
    marginBottom: 16,
    marginTop: 16,
  },
  task: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleSection: {
    color: colors.white,
    margin: 40,
    textAlign: 'center',
  }
});