import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoMedCare from '../../assets/medcare-logo.png';
import LogoIcon from '../../assets/logo-icon.png';
import FundoHome from '../../assets/fundo-home.png';
import Ficha from '../../assets/ficha.png';
import Watch from '../../assets/watch.png';
import Chat from '../../assets/chat.png';
import Video from '../../assets/video.png';

const PacienteDashboard = ({ navigation }) => {

  const [pacienteDashboard, setPacienteDashboard] = useState([]);

  useEffect(() => {
    fetchPacienteDashboard();
  }, []);

  const fetchPacienteDashboard = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/2'); 
      const data = await response.json();
      setPacienteDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!pacienteDashboard) {
    return <Text>Carregando informações...</Text>;
  }

  return (
    <ImageBackground source={FundoHome} style={styles.background}>

      {/* view superior*/}
      <View style={styles.viewSuperior}>
        {/* view do logo e dos botôes*/}
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, width: '100%'}}>
          <Image source={LogoMedCare} style={{width: 124, height: 48, resizeMode: 'contain'}}></Image>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PacientePerfil')}
                style={{ marginRight: 10 }}>
                <Icon name="account-circle" size={30} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon name="logout" size={30} color="#000" />
              </TouchableOpacity>
          </View>
        </View>

        {/* view nome do paciente */}
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', width: '60%', paddingVertical: 5, justifyContent: 'center', borderRadius: 30, marginTop: 20}}>
          <Image source={LogoIcon} style={{width: 60, height: 39, resizeMode: 'contain'}}></Image>
          <Text style={{color: '#000', fontSize: 20, marginLeft: 10}}>Olá, {pacienteDashboard.nome}</Text>
        </View>
      </View>

      {/* view inferior*/}
      <View style={styles.viewInferior}>

        {/* opções - area 1*/}
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 28}}>Informações do médico e monitoramento Watch</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MedicoPerfil')}
              style={{ alignItems: 'center', backgroundColor: '#FD9797', padding: 23, width: '30%', height: '100%', borderRadius: 30 }}
            >
              <Image source={Ficha} style={{ width: 50, height: 50, resizeMode: 'contain' }}></Image>
              <Text style={{ fontSize: 20 }}>Ficha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('InfoWatch')}
              style={{ alignItems: 'center', backgroundColor: '#F05454', padding: 23, width: '30%', height: '100%', borderRadius: 30 }}
            >
              <Image source={Watch} style={{ width: 50, height: 50, resizeMode: 'contain' }}></Image>
              <Text style={{ fontSize: 20 }}>Watch</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* traço de divisão central*/}
        <View style={{alignItems: 'center', marginVertical: 38}}>
          <View style={{ borderBottomColor: "#A7043B", borderBottomWidth: 1, width: '50%'}}/>
        </View>

        {/* opções - area 2*/}
        <View>

          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 28}}>Comunicação</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChatScreen')}
              style={{ alignItems: 'center', backgroundColor: '#FD9797', padding: 23, width: '30%', height: '100%', borderRadius: 30 }}
            >
              <Image source={Chat} style={{ width: 50, height: 50, resizeMode: 'contain' }}></Image>
              <Text style={{ fontSize: 20 }}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Video')}
              style={{ alignItems: 'center', backgroundColor: '#F05454', padding: 23, width: '30%', height: '100%', borderRadius: 30 }}
            >
              <Image source={Video} style={{ width: 50, height: 50, resizeMode: 'contain' }}></Image>
              <Text style={{ fontSize: 20 }}>Video call</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  viewSuperior: {
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 104
  },

  viewInferior: {
    //backgroundColor: 'yellow'
    

  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default PacienteDashboard;
