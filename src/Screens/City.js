
import React from "react";
import { SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar,View } from "react-native";

import IconText from "../components/IconText";
const City=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/City-bg.jpg')} style={styles.imagebg}>
            {/* <Text>
                City
            </Text> */}
            <Text style={[styles.city,styles.cityText]}>London</Text>
            <Text style={[styles.country,styles.cityText]}>UK</Text>
            <View style={[styles.populationWrapper,styles.rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={styles.populationText}/>
            </View>
            <View style={[styles.sunWrapper,styles.rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'yellow'} bodyText={'Sunrise At 6:30 A.M'} bodyTextStyles={styles.sunriseSetText}/>
                {/* <Feather name="sunrise" size={44} color="yellow" />
                <Text style={styles.sunriseText}>Sunrise At 6:30 A.M</Text> */}
                  <IconText iconName={'sunset'} iconColor={'pink'} bodyText={'Sunset At 7:00 P.M'} bodyTextStyles={styles.sunriseSetText}/>
                
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        
        
    },
    imagebg:{
        flex:1
        
    },
    city:{
        fontSize:50
    },
    country:{
        fontSize:45
    },
    cityText:{
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:'bold',
        color:'black'
    },
    populationWrapper:{
       
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'red',
        fontWeight:'bold'
    },
    sunWrapper:{
      
        justifyContent:'space-around',
        marginTop:20,
       
        
    },
    sunriseSetText:{
        marginTop:2
        
        
    },
   
    rowLayout:{
        flexDirection:'row',
        alignItems:"center",
    }

    

})

export default City