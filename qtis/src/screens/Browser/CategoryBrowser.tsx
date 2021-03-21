import React, { useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/qtisActionCreators'
import styles from './CategoryBrowserStyles'

function CategoryBrowser ({ route, navigation, actions, products }: any) {
  useEffect(() => {
    actions.fetchProducts(route.params.categoryName)
  }, [])
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
    style={styles.categoryBox}
    onPress={() => navigation.navigate('ProductDetail', { productBarCode: item.productBarCode })}
    testID={'productLink'}
    >
    <View style={styles.pictureBox}>
      <Image
      source={{ uri: item.productPicture }}
      style={styles.categoryPicture} key={1}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.brandText}>{item.productName.toUpperCase()}
    </Text>
    <Text style={styles.productDetailsText}>{item.brandName}
    </Text>
    <Text style={styles.productDetailsText}>{`${item.price}€`}
    </Text>
    </View>
</TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      testID={'backButton'}
      >
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>
      <Text style={styles.title}>{route.params.categoryName.toUpperCase()}</Text>
      <View style={styles.categoriesBox}>
      <FlatList
      data = {products}
      renderItem={renderItem}
      keyExtractor = {(item: any) => item.productName}
      horizontal={false}
      style={styles.flatList}
      />
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps ({ productsReducer }: any) {
  return {
    products: productsReducer.products
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      fetchProducts
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryBrowser)
