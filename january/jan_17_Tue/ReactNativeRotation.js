'use strict'
/**
 * @providesModule ReactNativeRotation
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class ReactNativeRotation extends Component {
  constructor () {
    super()
    this.state = {
      spinValue: new Animated.Value(0)
    }
  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
    const refreshIcon = <Icon name='refresh'size={16} color='white'style={styles.syncButton} />
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          {refreshIcon}
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})

export default ReactNativeRotation
