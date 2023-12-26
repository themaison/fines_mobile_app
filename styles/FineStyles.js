import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
      backButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#232323",
        paddingVertical: 20,
        marginTop: 40,
        justifyContent: 'center',
      },
    
      infoBlock: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#232323",
      },
    
      vehicleText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#313131",
        borderRadius: 10,
        fontSize: 14,
        color: "#929292",
      },
    
      fineText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
    
      // dateTimeText: {
      //   marginTop: 20,
      //   fontSize: 14,
      //   color: "#929292",
      // },
    
      violationContainer: {
        marginTop: 20,
        flex: 1,
        // другие стили...
      },
    
      payBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
     
      statusText: {
        flex: 1,
        color: "#FF003D",
        fontWeight: "bold",
      },
    
      costText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 5,
        textAlign: "right",
      },
    
      violationData: {
        borderRadius: 15,
        backgroundColor: '#F8F9F2',
        padding: 20,
      },
    
      button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCFF00', // Установите фон в прозрачный
        borderRadius: 15,
        color: "#232323",
        height: 60,
        marginTop: 40,
      }, 
    
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#232323"
      },
});