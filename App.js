
// O import é para importar classes 
//que vão ser utilizadas no código
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


// o export default é igual ao export
export default class App extends Component {

  constructor(props){
    super(props);

    // O atate serve para armazenar o estado da variavell
    //naquele momento
    this.state = { contador: 0}; // é o estado do celular
  }

  // Criei uma função void 
  // com o nome de onPress
onPress = (acao) => {  
  if(acao =='+')
  {
    // serve para atribuir valor para as variaveis  que foram criadas
    this.setState({
      contador: this.state.contador +1
  })

} else {
  this.setState({
    contador: this.state.contador ==0 ? 0 : this.state.contador -1
  })
}
}



// O render é responsavel por exibir todo o conteudo na tela
render() {
  return (
    <View>
      <TouchableOpacity style={estilo.botao} onPress={() => {this.onPress('+')}}>
        <Text style={estilo.descricao}>+</Text>
      </TouchableOpacity>
      <Text style={estilo.contador}>
        {this.state.contador !== 0 ? this.state.contador : 0}
      </Text>
      <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('-')}}>
        <Text style={estilo.descricao}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
}




// Responsavel por criar os elementos de estilização
const estilo = StyleSheet.create({
  botao: {
    padding: 20,
    backgroundColor: '#DDD',

  },
  descricao: {
    textAlign: 'center',
    fontSize: 30

  },
  contador: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center',
  }
}
)

