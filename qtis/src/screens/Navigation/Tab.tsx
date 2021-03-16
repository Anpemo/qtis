import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 50
  }
})
function Tab ({ color, tab, onPress, icon }: any) {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && icon === 'search1' &&
            <AntDesign name="search1" size={30} color={color} />
            }
            {icon && icon === 'barcode-scan' &&
              <MaterialCommunityIcons name="barcode-scan" size={30} color={color} />
            }
            {icon && icon === 'user' &&
              <FontAwesome5 name="user" size={30} color={color} />
            }
        </TouchableOpacity>
  )
}

export default Tab
