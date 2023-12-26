import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FineDescription from '../containers/FineDescription';

export default function FineScreen({ route }) {
  const navigation = useNavigation();
  const [regNumber, setRegNumber] = useState('');
  const [stsNumber, setStsNumber] = useState('');
  const [fineData, setFineData] = useState(null);

  useEffect(() => {
    const fetchFineData = async () => {
      const regNumber = await getData('regNumber');
      const stsNumber = await getData('stsNumber');
      const fines = await getDataJSON('fines');
      const fine = fines[route.params.fineIndex];
      
      setRegNumber(regNumber);
      setStsNumber(stsNumber);
      setFineData(fine);
    };

    fetchFineData();
  }, []);

  const finesButtonPress = async () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={finesButtonPress}>
          <Text style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#232323" />
          </Text>
        </TouchableOpacity>

      {fineData && (
        <View style={styles.infoBlock}>
            <Text style={styles.vehicleText}>Госномер: {regNumber} | СТС: {stsNumber}</Text>
            <Text style={styles.fineText}>{fineData.koap_text}</Text>
            <View style={styles.payBlock}>
                <Text style={styles.statusText}>{fineData.enable_discount ? 'Не оплачен' : 'Оплачен'}</Text>
                <Text style={styles.costText}>{fineData.sum} ₽</Text>
            </View>
        </View>
      )}

<View style={styles.violationСontainer}>
  <ScrollView style={styles.violationData}>
    <FineDescription title="Дата и время нарушения" desc={fineData.date_decision}/>
    <FineDescription title="Статья КоАП" desc={fineData.koap_code}/>
    <FineDescription title="КБК" desc={fineData.kbk}/>
    <FineDescription title="Номер постановления" desc={fineData.num_post}/>
    <FineDescription title="Дата постановления" desc={fineData.date_post}/>
    <FineDescription title="Подразделение" desc={fineData.division_name}/>      
  </ScrollView>

  <TouchableOpacity
    style={styles.button}
    onPress={()=> console.log('Штраф успешно оплачен!')}>
    <Text style={styles.buttonText}>Оплатить</Text>
  </TouchableOpacity>
</View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
