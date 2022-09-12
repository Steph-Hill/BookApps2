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
        margin : 10,
        padding:10,
        borderRadius:10,
        height:200,
        width:150
    },
    articleText:{

        fontSize:16,
        fontWeight:'500',
        color:colors.TextSecondary,
        flexDirection:'row',
        justifyContent:'center',
        textTransform:'capitalize'

    },
    image:{
        height:120,
        width:120,
        backgroundColor :'black'
    }, 

    description:{

        backgroundColor:'red',
        height: 200,
        color:'white'

    }
    /****End Articles */
})