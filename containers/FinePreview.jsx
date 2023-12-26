import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const FinePreview = (props) => {
    const navigation = useNavigation();

    const fineButtonPress = async () => {
        navigation.navigate('Fine', { fineIndex: props.fineIndex });
      };

    return (
        <TouchableOpacity style={styles.fineBlank} onPress={fineButtonPress}>
            <Text style={styles.fineBlankTitle}>{props.text}</Text>
            <Text style={styles.fineBlankDateTime}>{props.date}, {props.time}</Text>
            <View style={styles.fineBlankPayBlock}>
                <Text style={styles.fineBlankStatus}>{props.status}</Text>
                <Text style={styles.fineBlankCost}>{props.cost} ₽</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fineBlank: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#F8F9F2",
        borderRadius: 15,
        marginBottom: 10,
    },

    fineBlankTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#232323",
    },

    fineBlankDateTime: {
        fontSize: 14,
        color: "#929292",
        marginTop: 20,
    },

    fineBlankPayBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    fineBlankStatus: {
        flex: 1,
        color: "#FF003D",
        fontWeight: "bold",
    },

    fineBlankCost: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#232323",
        marginTop: 5,
        textAlign: "right",
    },
});

export default FinePreview;