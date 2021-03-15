import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

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
            {icon && icon === 'search1' &&
            <AntDesign name="search1" size={30} color="black" />
            }
            {icon && icon === 'barcode-scan' &&
              <MaterialCommunityIcons name="barcode-scan" size={30} color="black" />
            }
            {icon && icon === 'user' &&
              <FontAwesome5 name="user" size={30} color="black" />
            }
        </TouchableOpacity>
  )
}

export default Tab
