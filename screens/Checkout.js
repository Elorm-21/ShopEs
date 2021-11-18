import React from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
const Checkout = ({navigation})=>{

    function navigate(){
        navigation.navigate("Checkout");
    
    }
    return(
        <View>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   CHECKOUT INFO
               </Text>

               
               <View style={styles.FormView}>  
                <Text style={{color:'black'}}>Provide your details </Text> 
                  <TextInput placeholder={"Full Name"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={"Billing Address"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={"Country/Region"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={"Shipping Contact or Email"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={"Card Details(VISA/CC)"} placeholderTextColor={"black"} style={styles.TextInput}/>

                  <TouchableOpacity style={styles.Button} onPress= {() => {navigation.navigate("Home");}}> 
                  
                  <Text style={styles.ButtonText}>SUBMIT</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 50,
                  }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price  
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$</Text>
            </View>

                 </View>
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
            fontSize: 18,
            
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

export default Checkout