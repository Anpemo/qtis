import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { fetchProduct, cleanProduct } from '../../redux/actions/qtisActionCreators'
import ProductInterface from '../../Interfaces/productInterface'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function Scanner ({ actions, product, navigation }: { actions: AnyAction, product: ProductInterface, navigation: any }) {
  const [scanned, setScanned] = React.useState(false)
  const [hasPermission, setHasPermission] = React.useState < boolean | null >(null)
  const [productBarCode, setProductBarCode] = React.useState < number | null >(null)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true)
    if (data) {
      actions.fetchProduct(data.toString())
    }
    setProductBarCode(data)
  }
  function navigateToAddProduct () {
    setScanned(false)
    navigation.navigate('AddProduct', productBarCode)
    setProductBarCode(null)
  }
  useEffect(() => {
    if (scanned && product?.productBarCode) {
      navigation.navigate('ProductDetail', { productBarCode: product.productBarCode })
      setProductBarCode(null)
    } else if (scanned) {
      Alert.alert(
        'Product does not exist',
        'Do you want to add it?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => navigateToAddProduct()
          }
        ],
        {
          cancelable: true
        }
      )
    }
  }, [product])

  if (hasPermission === null) {
    return <Text testID={'requesting'}>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text testID={'camera'}>No access to camera</Text>
  }
  function resetScanner () {
    setScanned(false)
    actions.cleanProduct()
  }
  return (
    <View style={styles.container} >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        testID={'scanner'}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => resetScanner()} />}
    </View>
  )
}
function mapStateToProps ({ productsReducer }: Object) {
  return {
    product: productsReducer.product
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    actions: bindActionCreators({
      fetchProduct,
      cleanProduct
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scanner)
