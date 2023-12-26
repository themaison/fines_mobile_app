import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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