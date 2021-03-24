import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 50
  }
})
function Tab ({ color, onPress, icon }: any) {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress} testID={'tabContainer'}>
            {icon && icon === 'search1' &&
            <AntDesign name="search1" size={30} color={color} testID={'search'} />
            }
            {icon && icon === 'barcode-scan' &&
              <MaterialCommunityIcons name="barcode-scan" size={30} color={color} testID={'barcodeScan'} />
            }
            {icon && icon === 'user' &&
              <FontAwesome5 name="user" size={30} color={color} testID={'user'}/>
            }
        </TouchableOpacity>
  )
}

export default Tab
