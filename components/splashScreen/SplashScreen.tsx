import React, { useState } from 'react'
import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native'
import Navigation from '../../routes/Navigation';

const BG_IMG = "../../assets//splash1.jpg";
const { height, width } = Dimensions.get("screen");


export default function SplashScreen({ navigation }) {

    const Login = () => {

        navigation.navigate('Login', { modalVisible: true })
    }
    const SignUp = () => {

        navigation.navigate('SignUp', { modalVisibleSign: true })
    }
    return (
        <View style={{ flex: 1, paddingVertical: 40 }}>
            <Image
                style={{
                    ...StyleSheet.absoluteFillObject,
                    width: width,
                    height: height,
                }}
                source={require(BG_IMG)}
            />
            <View style={{
                width: "75%",
                alignItems: 'center',
                justifyContent: "center",
                marginTop: 70
            }}><View>

                    <Text style={{ fontSize: 40, color: 'white' }}>Enjoy The Trip</Text>
                    <Text style={{ fontSize: 40, color: 'white' }}>With me</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={{ ...styles.btnStyle, backgroundColor: "#E94832", }}>
                    <Pressable onPress={Login}>
                        <Text style={{ ...styles.btnTitleStyle, color: "white" }}>Login</Text>
                    </Pressable>
                </View>
                <View style={{ ...styles.btnStyle, backgroundColor: "#F7F6F6", }}>
                    <Pressable onPress={SignUp}>
                        <Text style={{ ...styles.btnTitleStyle, color: "#E94832" }}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        alignItems: "center"
    },
    btnStyle: {

        width: "75%",
        height: 65,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 40,
        marginVertical: 10
    },
    btnTitleStyle: {
        fontSize: 20
    }
})