import React, { Component } from 'react';


class NumeroAleatorio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroAleatorio: null
    };
  }

  gerarNumeroAleatorio = () => {
    const { Min, Max } = this.props;
    const numeroAleatorio = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    this.setState({ numeroAleatorio });
  };

  render() {
    const { numeroAleatorio } = this.state;

    return (
      <div>
        <button style={{ 
            width: 300,
            height: 150,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 25,
            backgroundColor:"#C0C0C0",
            flex:1,
            marginTop:150,
            marginLeft:50,
            cursor: "pointer"}}  
            onClick={this.gerarNumeroAleatorio}>Gerar Número Aleatório</button>
        {numeroAleatorio !== null && (
          <p style={{fontSize:30, marginTop:80, fontWeight:'bold', color:'black', marginLeft:45, }}>O número aleatório é: {numeroAleatorio}</p>
        )}
      </div>
    );
  }
}

export default NumeroAleatorio;