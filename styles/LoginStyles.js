import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
      },
    
      titleWrapper:{
        paddingTop: 80,
        marginBottom: 80
      },
    
      sectionTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: "#232323",
        lineHeight: 50
      },
    
      inputSection: {
        marginTop: 40,
        textAlign: 'center',
      },
    
      label:{
        fontSize: 14,
        marginBottom: 10,
        color: "#929292",
        
      },
  
      vehicleTypeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  
      radioButton: {
        flex: 1,
        height: 48,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      },
  
      radioButtonSelected: {
        backgroundColor: '#232323',
      },
  
      radioButtonUnselected: {
        backgroundColor: 'transparent',
        borderColor: '#232323',
        borderWidth: 2,
      },
  
      buttonTextSelected: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Цвет текста для выбранной плашки
      },
      
      buttonTextUnselected: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#232323', // Цвет текста для невыбранной плашки
      },
    
      input: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: "#F8F9F2",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        height: 60,
        marginBottom: 20,
      },
    
      button: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCFF00',
        borderRadius: 15,
        height: 60,
      },
      
    
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#232323"
      },
  
      descText: {
        textAlign:'center',
        marginTop: 20,
        fontSize: 12,
        color: "#929292",
      }
    });
  