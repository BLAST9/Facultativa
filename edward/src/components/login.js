import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const Login = (props) =>{

    const { cambiarPantalla, miOnChangeDeUsuario, nombreUsario } = props;

    return(

        <View>
            <Text>Pantalla 1</Text>

            <View>
                <TextInput
                   onChangeText={miOnChangeDeUsuario}
                    value={nombreUsario}
                />
            </View>

            <Button
                title = 'Ir a la pantalla 2'
                color = 'red'

                onPress = {
                    () =>{
                        cambiarPantalla('pantalla2');
                    }
                }
            />
        </View>

    );
}

export default Login;