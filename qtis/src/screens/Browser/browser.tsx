import React from 'react'
import {
  Image, TouchableOpacity, View, Text, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import categories from '../../../constants/categories'
import styles from './browserStyles'
import { Navigation } from '../../models'

export default function Browser ({ navigation } : {navigation:Navigation}) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
    testID={item.id}
    style={styles.categoryBox}
     onPress={() => navigation.navigate('CategoryBrowser', { categoryName: item.name })}>
        <View>
          <Image source={item.src} style={styles.categoryPicture} key={item.id} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>{item.name.toUpperCase()}
        </Text>
        </View>
      </TouchableOpacity>
  )

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CHOOSE A CATEGORY</Text>
      <View style={styles.categoriesBox}>
      <FlatList
      data = {categories}
      renderItem={renderItem}
      keyExtractor = {(item: any) => item.id}
      numColumns = {2}
      testID={'flatlistTest'}
      />
      </View>
    </SafeAreaView>
  )
}
