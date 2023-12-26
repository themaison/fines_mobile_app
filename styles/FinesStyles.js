import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
    
      vehicleBlank: {
        padding: 20,
        backgroundColor: "#232323",
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
    
      regTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#CCFF00",
        width:'auto',
        marginBottom: 10,
        textAlign: 'center',
    
      },
    
      regText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#313131",
        borderRadius: 15,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: "#fff",
      },
    
      finesTitle: {
        flexDirection: 'row', // Элементы располагаются горизонтально
        alignItems: 'center', // Элементы выравниваются по вертикали
        justifyContent: 'space-between' // Максимальное расстояние между элементами
      },
      
    
      topicText: {
        color: "#232323",
        fontSize: 32,
        fontWeight: 'bold',
      },
    
      amountText: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F8F9F2',
        color: "#929292",
        borderRadius: 15,
        //borderWidth: 2,
        //borderColor: '#E9EBE1',
      },
    
      fines: {
        marginTop: 40,
        flex: 1,
      },
    
      finesContainer:{
        marginTop: 20,
        flex: 1,
      },
    
      button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFAF8', // Установите фон в прозрачный
        borderColor: '#FF003D', // Добавьте цвет обводки
        borderWidth: 2, // Установите ширину обводки
        borderRadius: 15,
        height: 60,
        marginTop: 40,
        marginBottom: 20,
      }, 
    
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FF003D"
      },
});