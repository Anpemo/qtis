import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity, View, Text, KeyboardAvoidingView, Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { userRegister } from '../redux/actions/qtisActionCreators'
import { AntDesign } from '@expo/vector-icons'
import styles from './registerStyles'

function Register (this: any, { navigation, actions, user }: any) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userNameValidated, setUserNameValidated] = useState(false)
  const [emailValidated, setEmailValidated] = useState(false)
  const [passwordValidated, setPasswordValidated] = useState(false)
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false)
  const [formValidated, setFormValidated] = useState(false)
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  useEffect(() => {
    if (userName.length > 0) {
      setUserNameValidated(true)
    } else {
      setUserNameValidated(false)
    }
  }, [userName])

  useEffect(() => {
    if (emailRegEx.test(email)) {
      setEmailValidated(true)
    } else {
      setEmailValidated(false)
    }
  }, [email])

  useEffect(() => {
    if (passwordRegEx.test(password)) {
      setPasswordValidated(true)
    } else {
      setPasswordValidated(false)
    }
  }, [password])

  useEffect(() => {
    if (confirmPassword === password) {
      setConfirmPasswordValidated(true)
    } else {
      setConfirmPasswordValidated(false)
    }
  }, [password, confirmPassword])

  useEffect(() => {
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      setFormValidated(true)
    } else {
      setFormValidated(false)
    }
  }, [emailValidated, confirmPasswordValidated])

  useEffect(() => {
    if (user?.email) {
      navigation.navigate('Welcome', userName)
    } else if (user === 401) {
      Alert.alert('User already exists')
    }
  }, [user?.email])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'padding'}>
      <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      testID={'backButton'}
      >
      <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
        </TouchableOpacity>

      <Text style={styles.title}>Create your new account</Text>
      <View style={styles.formBox}>

      <TextInput
          onChangeText={(text) => setUserName(text)}
          placeholder={'What\'s your name?'}
          style={styles.inputTop}
          value={userName}
          testID={'userName'}
        />
        {!userNameValidated && (
          <Text style={styles.errorMessage}>Please write a name</Text>
        )
        }

      <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email'}
          style={styles.inputTop}
          value={email}
        />
        {!emailValidated && (
          <Text style={styles.errorMessage}>Please enter a correct email</Text>
        )
        }

        <TextInput
        placeholder={'Password'}
        onChangeText={(text) => setPassword(text)}
        style={styles.inputTop}
        value={password}
        secureTextEntry={true}
        />
        {!passwordValidated &&
            <Text style={styles.errorMessage}>Password should contain 8 character, a number and a letter</Text>
        }

        <TextInput
        placeholder={'Confirm Password'}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.inputTop}
        value={confirmPassword}
        secureTextEntry={true}
        />
        {!confirmPasswordValidated &&
        <Text style={styles.errorMessage}>Please make sure to write the same password</Text>
        }
      </View>
      <TouchableOpacity
      disabled ={!formValidated}
      activeOpacity={0.4}
      style={styles.button}
      onPress={() => actions.userRegister({ email, password, userName })}
      testID={'registerButton'}
      >
          <Text style={styles.buttonText} >REGISTER</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

function mapStateToProps ({ userReducer }: any) {
  return {
    user: userReducer.user
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      userRegister
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
