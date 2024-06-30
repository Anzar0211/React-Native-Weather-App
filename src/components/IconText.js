import React from "react"
import {View,StyleSheet,Text} from 'react-native'
import {Feather} from '@expo/vector-icons'

const IconText=(props)=>{
    const {iconColor,iconName,bodyText,bodyTextStyles}=props;
    return(
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[styles.textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    textTheme:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
        
    }
})

export default IconText