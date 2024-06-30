import React from "react"
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather=()=>{
    return(
      <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>7</Text>
        <Text style={styles.feels}>Feels like 5</Text>
         <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High:8 </Text>          
          <Text style={styles.highLow}>Low:6</Text>          
                  
          
        </View>
      </View>
      {/* <RowText
       messageOne={'Its Sunny'}
      messageTwo={'Its A perfect T-Shirt Weather'}
        containerStyles={styles.bodyWrapper}
        
        message1Style={styles.description}
        message2Style={styles.message}
       
      /> */}
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>          
          <Text style={styles.message}>Its A perfect T-Shirt Weather</Text>          
          
        </View>
      
      </SafeAreaView>
    )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'pink'
  },
  container:{
    
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  },
  temp:{
    color:'black',
    fontSize:50
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:48
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }


})
export default CurrentWeather