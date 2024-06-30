import React from "react"
import { StyleSheet,Text, SafeAreaView,FlatList,StatusBar,ImageBackground } from "react-native"
import ListItem from '../components/ListItem'
const DATA=[
    {dt_txt:"2023-02-18 12:00:00",
      main: {
        temp_min:8.55,
        temp_max: 7.55,
      },
      weather:[
        {
            main:'Rainy'
        }
      ]
    },
    {dt_txt:"2023-02-18 09:00:00",
      main: {
        temp_min:8.55,
        temp_max: 7.55,
      },
      weather:[
        {
            main:'Clear'
        }
      ]},
    {dt_txt:"2023-02-18 00:00:00",
      main: {
        temp_min:6.55,
        temp_max: 3.55,
      },
      weather:[
        {
            main:'Hazy'
        }
      ]},
    {dt_txt:"2023-02-18 15:00:00",
      main: {
        temp_min:8.55,
        temp_max: 7.55,
      },
      weather:[
        {
            main:'Cloudy'
        }
      ]}
]


const UpcomingWeather=()=>{
    const renderItems=({item})=>(
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/> 
    )
    return(
        <SafeAreaView style={styles.container}>
        
            
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={styles.image}>
                <Text>Upcoming Weather</Text>
              <FlatList
              
              data={DATA}
              renderItem={renderItems}
              keyExtractor={(item)=>item.dt_txt}/>
            </ImageBackground>
        
        </SafeAreaView>
    )
} 
const styles=StyleSheet.create({
    
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
        
    },
   
    condition:{
        color:'green',
        fontSize:15,
        
        
        
        
    },
    
    image:{
      flex:1
    }


})

export default UpcomingWeather