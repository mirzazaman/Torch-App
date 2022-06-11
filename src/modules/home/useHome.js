import React, { Component, useState } from 'react';
import { Vibration, AppRegistry, TouchableOpacity, PermissionsAndroid, Text, Alert, StyleSheet, View } from 'react-native';
import Torch from 'react-native-torch';

export default function useHome() {
    const [state, setState] = useState(false);
    const [color, setColor] = useState("#03A9F4");

    const requestCameraRuntimePermission = async () => {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Permission',
                    'message': 'Torch needs access to your Camera.'
                }
            )

            Torch.switchState(true);

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert("Camera Permission Not Granted");
            }

        } catch (err) {
            console.warn(err)
        }
    }


    const mainButton = () => {
        if (state) {
            Torch.switchState(state);
            Vibration.vibrate(100);
            setColor("#03A9F4")
            setState(!state)
        } else {
            Torch.switchState(state);
            Vibration.vibrate(100);
            setColor("#1D1D1D")
            setState(!state)
        }
    }

    return [mainButton, requestCameraRuntimePermission, color]
}