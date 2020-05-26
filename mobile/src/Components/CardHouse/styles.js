import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        height: 500,

        alignItems:"center",
        
        marginVertical:8,
        marginHorizontal:10,
        
        borderRadius:20,
        borderWidth:2,
        borderColor:'#5070F0',
    },
    imgView:{
        position:"absolute",
        top:15,

        height:250,
        width:"95%",
    },
    img:{
        flex:1,
        borderRadius:20
    },
    info:{
        paddingLeft:10,

        height:230,
        width:"95%",
        
        top:250,

        borderRadius: 30,
        backgroundColor:'#FFFFFF',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 10,
    },
    street:{
        alignSelf:"center",
        fontSize:28,
        color:"#5070F0",
        fontWeight:"bold",
    },
    end:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row',

    },
    city:{
        fontSize:16,
        color:"#51AA4A",
        marginRight:10
    },
    description:{
        color:"gray",
        fontSize:24,
        marginLeft:10
    },
    value:{
        color:"#51AA4A",
        fontSize:18,
        marginHorizontal:30,
    },
    line:{
        alignItems:"center",
        flexDirection:"row",
    },
    detailsButton:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:10,
        marginHorizontal:10
    },
    detailsText:{
        fontWeight:"bold",
        color:"#FF6262",
        fontSize:14,
        marginVertical:1,
    }
})