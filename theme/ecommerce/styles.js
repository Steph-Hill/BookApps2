import { StyleSheet} from 'react-native'

import { colors } from './colors'


export const styles = StyleSheet.create({

    content:{
        flex : 1,
        backgroundColor :colors.Primary,
        paddingTop:10,
        paddingHorizontal: 10
    },

    /*****Catégories*****/

    categorieContent :{
        
        
        width:'100%',
        height:100,
       
    },

    categorieTitle :{
        fontSize:25,
        color:colors.TextSecondary,
        fontWeight:'700'
    },
    toucheCategorie:{

        backgroundColor:colors.BgColorSecondary,
        margin : 10,
        padding:10,
        borderRadius:10,
        height:45,
        width:150,
        

    },
    catText:{

        fontSize:16,
        fontWeight:'500',
        color:colors.Secondary,
        flexDirection:'row',
        justifyContent:'center',
        textTransform:'capitalize'

    },

    /*****End Catégories */

    /****Articles *****/
    articleContent :{
        flex:1,
       
    },

    articleTitle :{
        fontSize:25,
        color:colors.TextSecondary,
        fontWeight:'700'
    },
    toucheArticle:{

        backgroundColor:colors.Color1,
      
        borderRadius:10,
        height:180,
        width:150
    },
    articleText:{

        fontSize:15,
        fontWeight:'500',
        color:colors.BgColorSecondary,
        textTransform:'capitalize',
        textAlign:'center',
        padding:5

    },
    image:{
        
        height:100,
        width:100,
        backgroundColor :'black',
        left:15,
        
        
    }, 

    description:{

        backgroundColor:'red',
        height: 150,
        color:'white'

    },
    row:{

        flex:1,
        justifyContent:"space-around",
        paddingBottom:20

    }
    /****End Articles */
})