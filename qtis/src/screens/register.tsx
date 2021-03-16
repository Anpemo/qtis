import React, { useEffect, useState } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'
import userRegister from '../../src/redux/actions/qtisActionCreators'

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

function Register (this: any, { navigation, actions }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  let emailValidated = false
  let passwordValidated = false
  let confirmPasswordValidated = false
  let formValidated = false

  useEffect(() => {
    if (emailRegEx.test(email)) {
      emailValidated = true
    }
  }, [email])

  useEffect(() => {
    if (passwordRegEx.test(password)) {
      passwordValidated = true
    }
  }, [password])

  useEffect(() => {
    if (confirmPassword === password) {
      confirmPasswordValidated = true
    }
  }, [password, confirmPassword])

  useEffect(() => {
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      formValidated = true
      console.log(formValidated)
    } else {
      formValidated = false
    }
  }, [emailValidated, confirmPasswordValidated])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>

      <Text style={styles.title}>Create your new account</Text>
      <View style={styles.formBox}>
      <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email'}
          style={styles.inputTop}
          value={email}
        />
        <TextInput
        placeholder={'Password'}
        onChangeText={(text) => setPassword(text)}
        style={styles.inputTop}
        value={password}
        // secureTextEntry={true}
        />
        <TextInput
        placeholder={'Confirm Pasword'}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.inputBottom}
        value={confirmPassword}
        // secureTextEntry={true}
        />

      </View>
      <TouchableOpacity
      disabled ={formValidated}
      activeOpacity={0.4}
      style={styles.button}
      onPress={() => { actions.userRegister({ user: email, password }) }} >
          <Text style={styles.buttonText} >REGISTER</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      userRegister
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Register)
