import BaseView from 'frontend/Containers/BaseView'
import React, {Component} from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const ItemButton = (props) => (
  <TouchableOpacity onPress={() => props.nav.navigate(props.target)} style={styles.buttonContainer}>
    <View style={styles.button} backgroundColor="#DEDEDE">
      <Icon name={props.icon} size={22} color={props.color} />
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  </TouchableOpacity>
)

export default class Setting extends Component {
  render () {
    const props = this.props
    return (
      <BaseView
        isHeader={true}
        title='Settings'
      >
        <ScrollView contentContainerStyle={styles.container}>
          <ItemButton color="#EF5350" icon="share-2" text="Animation Translation" nav={props.navigation} target="AnimaTranslationStack" />
        </ScrollView>
      </BaseView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 10
  },
  button: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#A0A0A0',
    borderRadius: 4
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 16
  }
})
