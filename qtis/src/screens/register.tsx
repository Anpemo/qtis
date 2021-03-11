import React, { useState } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 30
  },

  title: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontFamily: 'Montserrat',
    marginBottom: 10
  },
  formBox: {
    height: '45%',
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.squareRadius
  },
  inputTop: {
    height: '33.33%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  },
  inputBottom: {
    height: '33.33%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    height: SIZES.buttonheight,
    width: '100%',
    borderRadius: SIZES.buttonRadius,
    marginTop: 30
  },
  buttonText: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.p20,
    fontFamily: 'Montserrat'
  }
})

function Login ({ navigation }: any) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create your new account</Text>
      <View style={styles.formBox}>
      <TextInput
          onChangeText={(event) => setUserName(event)}
          placeholder={'Email'}
          style={styles.inputTop}
        />
        <TextInput
        placeholder={'Password'}
        onChangeText={(event) => setPassword(event)}
        style={styles.inputTop}
        />
        <TextInput
        placeholder={'Confirm Pasword'}
        onChangeText={(event) => setConfirmPassword(event)}
        style={styles.inputBottom}
        />

      </View>
      <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default Login
