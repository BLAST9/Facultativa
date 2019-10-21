
import React, {Component} from 'react';

import Login from '../components/login';
import Profile from '../components/perfil';

class LoginContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            vista:'pantalla1',
            usuario: '',
        }
    }

    miEventoDeUsuario = (text)=>{
        this.setState({usuario:text,})
    }

    cambiarPantalla  = ( pantalla)=> {

        this.setState({
            vista: pantalla
        })

    };

    render(){
        
        const {vista} = this.state;

        if(vista === 'pantalla1'){
            return(
                <Login
                   miOnChangeDeUsuario = {this.miEventoDeUsuario}
                   nombreUsuario={this.usuario}
                   cambiarPantalla = {this.cambiarPantalla}
                />
            );
        }

        if(vista === 'pantalla2'){
            return(
                <Profile
                    cambiarPantalla = {this.cambiarPantalla}
                    usuario = {this.state.usuario}
                />
            );
        }
    }
}

export default LoginContainer;