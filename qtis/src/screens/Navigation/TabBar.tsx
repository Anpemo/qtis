import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { COLORS, SHADOW } from '../../../constants'
import Tab from '../Navigation/Tab'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '100%',
    justifyContent: 'space-between',
    ...SHADOW
  }
})

function TabBar ({ state, navigation }: any) {
  const [selected, setSelected] = useState('Browser')
  const { routes } = state
  const renderColor = (currentTab: any) => currentTab === selected ? COLORS.brown : 'black'

  function handlePress (activeTab: any, index: any) {
    setSelected(activeTab)
    if (state.index !== index) {
      navigation.navigate(activeTab)
    }
  }
  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            {
                routes.map((route: any, index: any) =>
                 <Tab
                    tab={route}
                    icon={route.params.icon}
                    onPress={() => handlePress(route.name, index)}
                    color={renderColor(route.name)}
                    key={route.key}
                />)
            }
        </View>
    </View>)
}

export default TabBar
