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
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontFamily: 'Montserrat',
    marginBottom: 10
  },
  formBox: {
    height: '65%',
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.squareRadius,
    justifyContent: 'center'
  },
  inputTop: {
    height: '18%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  },
  errorMessage: {
    color: COLORS.error,
    width: '90%',
    marginLeft: 15,
    marginTop: 3

  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    height: SIZES.buttonheight,
    width: '100%',
    borderRadius: SIZES.buttonRadius,
    marginTop: 20
  },
  buttonText: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.p20,
    fontFamily: 'Montserrat'
  }
})

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

  function submitUserData () {
    actions.userRegister({ email, password, userName })
  }

  useEffect(() => {
    if (user.email) {
      navigation.navigate('Welcome')
    } else {
      // window.alert('User already exists')
    }
  }, [user.email])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
      <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
        </TouchableOpacity>

      <Text style={styles.title}>Create your new account</Text>
      <View style={styles.formBox}>

      <TextInput
          onChangeText={(text) => setUserName(text)}
          placeholder={'What\'s your name?'}
          style={styles.inputTop}
          value={userName}
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
        placeholder={'Confirm Pasword'}
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
      onPress={() => submitUserData()} >
          <Text style={styles.buttonText} >REGISTER</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

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
