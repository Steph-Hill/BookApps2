
import { StyleSheet } from "react-native"
import { colors } from "./color"

export const styles = StyleSheet.create({
    
    content : {
        backgroundColor : colors.primary,
        padding:15,
        margin:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'rgba(31, 118, 115, 1)',
        flexDirection:'row',
        justifyContent:'space-around'
       
    },

    viewImg : {

        height:100,
        width:100,
        
    },

    viewText :{
           
        height:100,
        width:190,
        justifyContent:'center',
        alignItems:'center'
        
    },
    image:{

        height:100,
        width:100,
        borderRadius:50
    }

})