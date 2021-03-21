import React, { useEffect, useState } from 'react'
import {
  Image, View, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity, ScrollView, Platform, TextInput
} from 'react-native'
import { images } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import skinTypes from '../../../constants/skinTypes'
import styles from './ProfileStyles'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Reviews from '../../../src/screens/Reviews/Reviews'
import { updateUser } from '../../redux/actions/qtisActionCreators'

function Profile ({ user, actions }: any) {
  const [openSkinType, setOpenSkinType] = useState(false)
  const [openReviews, setOpenReviews] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [userPicture, setUserPicture] = useState(user.userPicture)
  const [skinType, setSkinType] = useState(user.skinType)
  const [userName, setUserName] = useState(user.userName)
  const [age, setAge] = useState(user.age)
  const [city, setCity] = useState(user.city)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setUserPicture(result.uri)
    }
  }
  function selectSkinType (category : any) {
    setSkinType(category)
    setOpenSkinType(false)
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1, paddingBottom: 50 }}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
      <ImageBackground source={images.profileHeader} style={styles.header} >
          <View style={styles.pictureBox}>
            { userPicture
              ? <Image source={{ uri: userPicture }} style={styles.userPicture} />
              : <Text style={styles.userPictureText}>ADD A PICTURE</Text>}
            <View style={styles.cameraButtonContainer} >
              <Ionicons name="camera-outline" size={35} color="grey" onPress={pickImage}/>
            </View>
          </View>
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.userInformation}>
          <Text style={styles.userName}>{user.userName}
          </Text>
          {user.age &&
            <Text style={styles.userData}>{`${user.age} years old`}
            </Text>
          }
          <Text style={styles.userData}>{user.city}
          </Text>
        </View>
      <View style={styles.accordionsBox}>
        <TouchableOpacity
        onPress={() => {
          setOpenSkinType(!openSkinType)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>SKIN TYPE: {skinType.toUpperCase()}</Text>
              <View style={styles.sectionContentBox}>
                {openSkinType && skinTypes.map((skinType) => (
                  <TouchableOpacity
                  key={skinType}
                  activeOpacity={0.5}
                  style={styles.skinTypesButton}
                  onPress={() => selectSkinType(skinType)}
                  >
                    <Text style={styles.skinType}>{skinType.toUpperCase()}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          setOpenReviews(!openReviews)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>YOUR REVIEWS</Text>
              <View style={styles.sectionContentBox}>
                {openReviews &&
                  <Reviews parameter={user._id}/> }
              </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          setOpenSettings(!openSettings)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>ACCOUNT SETTINGS</Text>
              <View >
                {openSettings &&
                  <View>

                    <TextInput
                      onChangeText={(event) => setUserName(event)}
                      placeholder={'What\'s your name?'}
                      style={styles.settingInputs}
                      />
                    <TextInput
                    placeholder={'How old are you?'}
                    onChangeText={(event) => setAge(event.toString())}
                    style={styles.settingInputs}
                    keyboardType={'decimal-pad'}
                    />

                      <TextInput
                      placeholder={'Where are you from?'}
                      onChangeText={(event) => setCity(event)}
                      style={styles.settingInputs}
                      />
                    <TouchableOpacity style={styles.updateButton}>
                      <Text style={styles.updateText} onPress={() => actions.updateUser({ city, age, userName, _id: user._id, userPicture, skinType })}>UPDATE YOUR DATA</Text>
                    </TouchableOpacity>
                  </View>
                }
              </View>
            </View>

        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  </KeyboardAvoidingView>
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
      updateUser
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
