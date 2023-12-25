import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getFines } from './FinesAPI';
import { storeDataJSON, getDataJSON } from './SessionJSON';
import { storeData, getData } from './Session';

export default function LoginScreen() {
  const [vehicleType, setVehicleType] = useState('auto');
  const [regNumberAuto, setRegNumberAuto] = useState('');
  const [regNumberMoto, setRegNumberMoto] = useState('');
  const [regNumberTrailer, setRegNumberTrailer] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [stsNumber, setStsNumber] = useState('');
  
  const navigation = useNavigation();

  const regNumberAutoPattern = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/;
  const regNumberMotoPattern = /^\d{4}[АВЕКМНОРСТУХ]{2}\d{2,3}$/;
  const regNumberTrailerPattern = /^[АВЕКМНОРСТУХ]{2}\d{6,7}$/;
  const stsNumberPattern = /^\d{10}$/;

  useEffect(() => {
    const loadUserData = async () => {

      const savedVehicleType = await getData('vehicleType');
      const savedRegNumber = await getData('regNumber');
      const savedStsNumber = await getData('stsNumber');

      console.log("vehicleData: ", {savedVehicleType}, {savedRegNumber}, {savedStsNumber});

      if (savedVehicleType !== null) setVehicleType(savedVehicleType);
      if (savedRegNumber !== null) setRegNumber(savedRegNumber);
      if (savedStsNumber !== null) setStsNumber(savedStsNumber);

      switch (vehicleType) {
        case 'auto':
          setRegNumberAuto(regNumber);
          break;
        case 'moto':
          setRegNumberMoto(regNumber);
          break;
        case 'trailer':
          setRegNumberTrailer(regNumber);
          break;
      }
    };
  
    loadUserData();
  }, []);

  const homeButtonPress = async () => {
    let regNumberPattern;
    let currentRegNumber;
    //console.log();

    switch (vehicleType) {
      case 'auto':
        currentRegNumber = regNumberAuto;
        regNumberPattern = regNumberAutoPattern;
        break;
      case 'moto':
        currentRegNumber = regNumberMoto;
        regNumberPattern = regNumberMotoPattern;
        break;
      case 'trailer':
        currentRegNumber = regNumberTrailer;
        regNumberPattern = regNumberTrailerPattern;
        break;
    }

    if (!currentRegNumber.trim()) {
      alert('Пожалуйста, введите Госномер');
      return;
    }  

    // Валидация госномера
    if (!regNumberPattern.test(currentRegNumber)) {
      alert('Пожалуйста, введите действительный Госномер');
      return;
    }
    
    if (!stsNumber.trim()) {
      alert('Пожалуйста, введите серию и номер СТС');
      return;
    }
  
    // Валидация номера СТС
    if (!stsNumberPattern.test(stsNumber)) {
      alert('Пожалуйста, введите действительный номер СТС');
      return;
    }

    setRegNumber(currentRegNumber);
    await storeData('vehicleType', vehicleType);
    await storeData('regNumber', regNumber);
    await storeData('stsNumber', stsNumber);

    // Вызов функции getFines
    const fines = await getFines(regNumber, stsNumber);

    if (fines.message){
      alert(fines.message);
      return;
    }
    
    // Проверка, что ответ от API содержит штрафы
    if (fines && fines.length > 0) {
      console.log(fines); 
      await storeDataJSON('fines', fines);
    }
    else {
      alert("У вас нет штрафов!");
    }

    navigation.navigate('Home');
  };
  

  return (
    <View style={styles.container}>

      <View style = {styles.titleWrapper}>
        <Text style={styles.sectionTitle}>Вход в приложение</Text>
      </View >
      
      <Text style={styles.label}>Тип транспорта</Text> 
      <View style={styles.vehicleTypeWrapper}>
          <TouchableOpacity 
            style={[styles.radioButton, vehicleType === 'auto' ? styles.radioButtonSelected : styles.radioButtonUnselected]} 
            onPress={() => setVehicleType('auto')}>
            <Text style={vehicleType === 'auto' ? styles.buttonTextSelected : styles.buttonTextUnselected}>Авто</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, vehicleType === 'moto' ? styles.radioButtonSelected : styles.radioButtonUnselected]} 
            onPress={() => setVehicleType('moto')}>
            <Text style={vehicleType === 'moto' ? styles.buttonTextSelected : styles.buttonTextUnselected}>Мото</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, vehicleType === 'trailer' ? styles.radioButtonSelected : styles.radioButtonUnselected]} 
            onPress={() => setVehicleType('trailer')}>
            <Text style={vehicleType === 'trailer' ? styles.buttonTextSelected : styles.buttonTextUnselected}>Прицеп</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputSection}>

        {vehicleType === 'auto' && (
          <>
            <Text style={styles.label}>Госномер</Text>   
            <TextInput
              style={styles.input}
              onChangeText={(text) => setRegNumberAuto(text.toUpperCase())} // Изменено на setRegNumberAuto
              value={regNumberAuto} // Изменено на regNumberAuto
              placeholder="A000AA000"
              placeholderTextColor="#929292"
            />
          </>
        )}

        {vehicleType === 'moto' && (
          <>
            <Text style={styles.label}>Госномер</Text>   
            <TextInput
              style={styles.input}
              onChangeText={(text) => setRegNumberMoto(text.toUpperCase())} // Изменено на setRegNumberMoto
              value={regNumberMoto} // Изменено на regNumberMoto
              placeholder="0000AA000"
              placeholderTextColor="#929292"
            />
          </>
        )}

        {vehicleType === 'trailer' && (
          <>
            <Text style={styles.label}>Госномер</Text>   
            <TextInput
              style={styles.input}
              onChangeText={(text) => setRegNumberTrailer(text.toUpperCase())} // Изменено на setRegNumberTrailer
              value={regNumberTrailer} // Изменено на regNumberTrailer
              placeholder="AA0000000"
              placeholderTextColor="#929292"
            />
          </>
        )}

          <Text style={styles.label}>Серия и номер СТС</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setStsNumber(text.toUpperCase())}
            value={stsNumber}
            placeholder="0000000000"
            placeholderTextColor="#929292"
          />

          <TouchableOpacity
          style={styles.button}
          onPress={homeButtonPress}>
            <Text style={styles.buttonText}>Далее</Text>
          </TouchableOpacity>

          <Text style={styles.descText}>*Нажимая кнопку "Далее", вы соглашаетесь соглашаетесь на обработку и хранение данных. </Text>
          </View>
          <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
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
