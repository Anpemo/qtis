import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import navigationModules from '../../../constants/navigationModules'
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
  const { SEARCH, BARCODE, USER } = navigationModules
  return (
        <TouchableOpacity style={styles.container} onPress={onPress} testID={'tabContainer'}>
            {icon && icon === SEARCH &&
            <AntDesign name="search1" size={30} color={color} testID={SEARCH} />
            }
            {icon && icon === BARCODE &&
              <MaterialCommunityIcons name="barcode-scan" size={30} color={color} testID={BARCODE} />
            }
            {icon && icon === USER &&
              <FontAwesome5 name="user" size={30} color={color} testID={USER}/>
            }
        </TouchableOpacity>
  )
}

export default Tab
