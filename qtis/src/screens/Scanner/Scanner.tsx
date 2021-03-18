import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProduct } from '../../redux/actions/qtisActionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function Scanner ({ actions, product, navigation }: any) {
  const [hasPermission, setHasPermission] = useState < boolean | null >(null)
  const [scanned, setScanned] = useState(false)
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true)
    if (data) {
      actions.fetchProduct(data)
    }
  }
  useEffect(() => {
    console.log('entraproduct', product)
    if (scanned && product?.productBarCode) {
      navigation.navigate('ProductDetail', { productBarCode: product.productBarCode })
    } else if (scanned) {
      alert('This product does not have reviews. Do you want to create it?')
    }
    console.log('scanner', scanned)
  }, [product])

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  )
}
function mapStateToProps ({ productsReducer }: any) {
  return {
    product: productsReducer.product
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      fetchProduct
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scanner)
