import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    Image,
    Touchable
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

export default class IssLocationScreen extends Component {
    
    }


    render() {
        
            return (
              
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Tela da localização da EEI!</Text>
                        </View>
                        
                    </ImageBackground>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    refeshContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    
});