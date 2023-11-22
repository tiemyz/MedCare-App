import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundoPerfil from '../assets/fundo-perfil.png';
import IconPerfil from '../assets/icon-perfil.png';

const MedicoPerfil = () => {
  return (
    <ImageBackground source={FundoPerfil} style={styles.background}>
      <View style={styles.viewPrincipal}>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginTop: 21}}>
          <TouchableOpacity>
            <Icon name="edit" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginBottom: 25}}>
          <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain' }}></Image>
        </View>

        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={{fontSize: 20, marginBottom: 50}}>Médico (a):</Text>

          <Text style={{fontSize: 20, marginBottom: 21}}>nome do médico - API</Text>

          <Text style={{fontSize: 20, marginBottom: 21}}>CRM: </Text>
          <Text style={{fontSize: 20}}>Data de nascimento: </Text>
          <Text style={{fontSize: 20, marginBottom: 21}}>api</Text>
          <Text style={{fontSize: 20}}>Email: </Text>
          <Text style={{fontSize: 20, marginBottom: 24}}>api</Text>
        </View>

        {/* traço de divisão central*/}
        <View style={{alignItems: 'center', marginBottom: 24}}>
          <View style={{ borderBottomColor: "#000000", borderBottomWidth: 1, width: '70%'}}/>
        </View>

        <View style={{alignItems: 'center', marginBottom: 21}}>
          <Text style={{fontSize: 18, marginBottom: 21}}>Atendimento presencial: </Text>
          <Text style={{fontSize: 18, marginBottom: 21}}>Nome do local - API</Text>
          <Text style={{fontSize: 18, marginBottom: 21}}>Endereço - API</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,  
      height: 5, 
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MedicoPerfil;
