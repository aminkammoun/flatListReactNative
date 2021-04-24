import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Pressable, View } from "react-native";
import { IconButton, Colors, Text, TextInput } from 'react-native-paper';


export default function login({ navigation }) {
    const [modalVisible, setModalVisible] = useState(navigation.state.params.modalVisible)
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={{ backgroundColor: 'transparent', }}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View
                style={{
                    height: '75%',
                    marginTop: 'auto',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50
                }}>
                <View style={{ marginTop: 50, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>
                                    Welcome
                    </Text>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                                    Back
                    </Text>

                            </View>

                        </View>


                        <IconButton
                            icon="camera"
                            color={Colors.red500}
                            size={40}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>


                </View>
                <View style={styles.bottom}>
                    <TextInput
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                        selectionColor='#E94832'
                        theme={{ colors: { primary: '#E94832' } }}
                        style={styles.inputStyle}


                    />
                    <TextInput
                        label="password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode="outlined"
                        selectionColor='#E94832'
                        theme={{ colors: { primary: '#E94832' } }}
                        secureTextEntry={true}
                        style={styles.inputStyle}

                    />
                    <Text style={{ marginHorizontal: 10, color: 'blue' }}>forget Password ?</Text>
                    <View style={{ ...styles.btnStyle, backgroundColor: "#E94832", }}>
                        <Pressable onPress={() => {
                            setModalVisible(!modalVisible)
                            navigation.goBack()
                        }}>
                            <Text style={{ ...styles.btnTitleStyle, color: "white" }}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    btnStyle: {

        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 40,
        position: 'relative',
        marginTop: 30
    },
    btnTitleStyle: {
        fontSize: 20,

    },
    bottom: {
        flex: 1,
        width: "100%",
        padding: 20,
        marginTop: 50,


    },
    inputStyle: { marginBottom: 10, height: 45 }
})
