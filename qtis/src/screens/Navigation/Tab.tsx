import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5

  }
})
function Tab ({ color, tab, onPress, icon }: any) {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <AntDesign name={icon} size={30} color={ color } />
}
            <Text style={{ color }}>{tab.name}</Text>
        </TouchableOpacity>
  )
}

export default Tab
