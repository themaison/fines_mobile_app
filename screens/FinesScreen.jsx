import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getDataJSON, storeDataJSON} from '../store/SessionJSON';
import { storeData, getData } from '../store/Session';
import FinePreview from '../containers/FinePreview';
import styles from '../styles/FinesStyles';

export default function FinesScreen() {
  const navigation = useNavigation();
  const [regNumber, setRegNumber] = useState('');
  const [stsNumber, setStsNumber] = useState('');
  const [fines, setFines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const regNumber = await getData('regNumber');
      const stsNumber = await getData('stsNumber');
      const savedFines = await getDataJSON('fines');

      setRegNumber(regNumber);
      setStsNumber(stsNumber);
      setFines(savedFines);
    };

    fetchData();
    return
  }, []);

  const exitButtonPress = async () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.vehicleBlank}>
        <Text style={styles.regTitle}>Госномер</Text>
        <Text style={styles.regText}>{regNumber}</Text>
      </View>

      <View style={styles.fines}>
        <View style={styles.finesTitle}>
          <Text style={styles.topicText}>Штрафы</Text>
          <Text style={styles.amountText}>Всего: {fines.length}</Text>
        </View>

        <ScrollView style={styles.finesContainer}>
          {fines.length > 0 && fines.map((fine, index) => (
            <FinePreview 
              key={index}
              fineIndex={index}
              text={fine.koap_text}
              date={fine.date_decision.split(' ')[0]}
              time={fine.date_decision.split(' ')[1]}
              status={fine.enable_discount ? 'Не оплачен' : 'Оплачен'}
              cost={fine.sum}
            />
          ))}
        </ScrollView>
        
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={exitButtonPress}>
        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },

//   vehicleBlank: {
//     padding: 20,
//     backgroundColor: "#232323",
//     marginTop: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//   },

//   regTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: "#CCFF00",
//     width:'auto',
//     marginBottom: 10,
//     textAlign: 'center',

//   },

//   regText: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: "#313131",
//     borderRadius: 15,
//     textAlign: 'center',
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: "#fff",
//   },

//   finesTitle: {
//     flexDirection: 'row', // Элементы располагаются горизонтально
//     alignItems: 'center', // Элементы выравниваются по вертикали
//     justifyContent: 'space-between' // Максимальное расстояние между элементами
//   },
  

//   topicText: {
//     color: "#232323",
//     fontSize: 32,
//     fontWeight: 'bold',
//   },

//   amountText: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     backgroundColor: '#F8F9F2',
//     color: "#929292",
//     borderRadius: 15,
//     //borderWidth: 2,
//     //borderColor: '#E9EBE1',
//   },

//   fines: {
//     marginTop: 40,
//     flex: 1,
//   },

//   finesContainer:{
//     marginTop: 20,
//     flex: 1,
//   },

//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFAF8', // Установите фон в прозрачный
//     borderColor: '#FF003D', // Добавьте цвет обводки
//     borderWidth: 2, // Установите ширину обводки
//     borderRadius: 15,
//     height: 60,
//     marginTop: 40,
//     marginBottom: 20,
//   }, 

//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: "#FF003D"
//   },
// });
