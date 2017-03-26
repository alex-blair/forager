import React from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'
import Button from 'react-native-button'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'
import styles from './styles/StyleSheet'

const ForageScreen = (props) => {
  const { navigate } = props.navigation
  const markers = [{
    latitude: -36.886900,
    longitude: 174.760750,
    title: 'Lemon Tree',
    subtitle: 'Make lemonade!'
  }]
  return (
    <View style={styles.container}>
      <HeaderText>Map</HeaderText>
      <DefaultText>Move around the map to find resourcess</DefaultText>
      <Components.MapView
          style={styles.mapBox}
          annotations={markers}
          initialRegion={{
            latitude: -36.886763,
            longitude: 174.760321,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        />
        <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('GetLocation')}>
          <HeaderText>Get Location</HeaderText>
        </Button>
        <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('GetResources')}>
          <HeaderText>See all resources</HeaderText>
        </Button>
    </View>
  )
}

ForageScreen.navigationOptions = {
  title: 'Forage'
}

export default ForageScreen
