import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity, View, Text, KeyboardAvoidingView, Alert
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { userLogin } from '../redux/actions/qtisActionCreators'
import styles from './LoginStyles'

function Login ({ navigation, actions, user }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user?.email) {
      navigation.navigate('tabNavigator', { userName: user.userName })
    } else if (user === 401) {
      Alert.alert('Wrong credentials')
    }
  }, [user])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>
      <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      style={styles.backContainer}
      testID={'backButton'}
      >
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
      <TouchableOpacity
      style={styles.button}
      onPress={() => actions.userLogin({ email, password })}
      testID={'loginButton'}
      >
          <Text style={styles.buttonText}>LOGIN</Text>
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
      userLogin
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
