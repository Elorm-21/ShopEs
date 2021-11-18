import React from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
const Login = ({navigation})=>{

    function navigate(){
        navigation.navigate("Signup");
    }
    return(
        <View>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                     {"\n"}
                    ShopEs
               </Text>
               <View style={styles.FormView}>   
               backgroundImage= uri=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5BMW1fzoN5b8mxVkDutkcKo91OHxTKqxOA&usqp=CAU",
                  <TextInput placeholder={"Email Address"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={" Password"} secureTextEntry={true} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TouchableOpacity style={styles.Button} onPress= {() => {navigation.navigate("Home");}}> 
                      <Text style={styles.ButtonText}>Login</Text>
                  </TouchableOpacity>

               </View>
               <Text></Text>
               <Text style={styles.QuestionText}>
                   Dont have an account? </Text>
               <TouchableOpacity style={styles.TextButton} onPress={navigate}>
               <Text style={styles.SignUpText}>
                   Sign Up here
               </Text>
               </TouchableOpacity>
           </View>
        </View>




    ) 
}

const styles = StyleSheet.create({
    BottomView:{
        width:"100%",
        height:"100%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    Heading:{
      color:"black",  
      fontSize: 40,
      fontWeight: "bold",
      marginLeft: 30,
      marginTop: 60,
    },
    FormView:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    TextInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
    },
    Button:{
        width:"90%",
        color: "black",
        height: 52,
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
    },
    ButtonText:{
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },

    QuestionText:{
            color: "black",
            textAlign: "center", 
            fontWeight: "bold",
            fontSize: 15,
            
    },

    SignUpText:{
        color: "black",
        fontWeight: "bold"
    },
    TextButton:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20
    },

})

export default Login