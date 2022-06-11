import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import useHome from './useHome'
import TorchIcon from '../../assets/TorchIcon.png';
import { useEffect } from 'react';

export default function Home() {

    const [mainButton, requestCameraRuntimePermission, color] = useHome();

    useEffect(() => {
        requestCameraRuntimePermission()
    }, [])


    const styles = StyleSheet.create({
        mainBack: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color,
        },
        torchIcon: {
            margin: 70,
            width: 60,
            height: 60,
        },
        iconView: {
            display: "flex",
            borderRadius: 150,
            backgroundColor: "white"
        },
        text: {
            color: "white",
            textAlign: "center",
            fontSize: 10
        },
        contact: {
            position: "absolute",
            bottom: 5
        }
    })

    return (
        <View style={styles.mainBack}>
            <TouchableOpacity style={styles.iconView} onPress={mainButton}>
                <Image style={styles.torchIcon} source={TorchIcon} />
            </TouchableOpacity>
            <View style={styles.contact}>
                <Text style={styles.text}>Developed by ZAMAN</Text>
                <Text style={styles.text}>mirzazaman828@gmail.com</Text>
            </View>
        </View>
    )

}