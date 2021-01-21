import React from 'react'
import {Text,StyleSheet} from 'react-native';
import configs from '../configs/configs';

function KoodiText({children,style, ...otherProps}){

return(
    <Text style={[configs.text, style]} {...otherProps}>
       {children}
    </Text>
);


}


const styles = StyleSheet.create({

})
export default KoodiText;