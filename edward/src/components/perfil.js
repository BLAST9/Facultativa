import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const Login = (props) =>{

    const { cambiarPantalla, usuario} = props;

    return(

        <View>
            <Text> hola {usuario}</Text>

           

            <Button
                title = 'Ir a la pantalla 1'
                color = 'red'

                onPress = {
                    () =>{
                        cambiarPantalla('pantalla1');
                    }
                }
            />
        </View>

    );
}

export default Login;