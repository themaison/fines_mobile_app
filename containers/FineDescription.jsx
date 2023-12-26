import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const FineDescription = (props) => {
    return (
        <TouchableOpacity style={styles.dataBlock}>
            <Text style={styles.dataTitle}>{props.title}</Text>
            <Text style={styles.dataDesc}>{props.desc}</Text>
        </TouchableOpacity>     
    )
}

const styles = StyleSheet.create({
    dataBlock: {
        //backgroundColor: "#F3F6E2",
        marginBottom: 20,
      },
    
      dataTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#232323",
      },
    
      dataDesc: {
        marginTop: 10,
        fontSize: 14,
        color: "#929292",
      },
});

export default FineDescription;