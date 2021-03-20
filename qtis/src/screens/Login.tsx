import React, { useEffect, useState } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView, Alert
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { userLogin } from '../redux/actions/qtisActionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  backContainer: {
    top: -160
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
    height: 118,
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.squareRadius
  },
  inputTop: {
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  },
  inputBottom: {
    height: '50%',
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

function Login ({ navigation, actions, user }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user?.email) {
      navigation.navigate('tabNavigator')
    } else if (user === 401) {
      Alert.alert('Wrong credentials')
    }
  }, [user])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>
      <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backContainer}>
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>

      <Text style={styles.title}>Log into your account</Text>
      <View style={styles.formBox}>
      <TextInput
          onChangeText={(event) => setEmail(event)}
          placeholder={'Email'}
          style={styles.inputTop}
          value={email}
        />
        <TextInput
        placeholder={'Password'}
        onChangeText={(event) => setPassword(event)}
        style={styles.inputBottom}
        value={password}
        secureTextEntry={true}
        />

      </View>
      <TouchableOpacity style={styles.button} onPress={() => actions.userLogin({ email, password })} >
          <Text style={styles.buttonText}>LOGIN</Text>
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
      userLogin
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
