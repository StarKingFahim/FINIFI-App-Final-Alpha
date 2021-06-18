import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userId          : firebase.auth().currentUser.email,
          userName          :'',
        }
      }

      getUserDetails=(userId)=>{
        db.collection("users").where('email_id','==', userId).get()
        .then((snapshot)=>{
          snapshot.forEach((doc) => {
            console.log(doc.data().first_name);
            this.setState({
              userName  :doc.data().first_name + " " + doc.data().last_name
            })
          })
        })
      }
  
  
  getreceiverDetails(){
    console.log("receiver ",this.state.receiverId);
    db.collection('users').where('username','==',this.state.receiverId).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          receiverName    : doc.data().first_name,
          receiverContact : doc.data().mobile_number,
          receiverAddress : doc.data().address,
        })
      })
    });
  }
  componentDidMount(){
    this.getreceiverDetails()
    this.getUserDetails(this.state.userId)
   }


   render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
        <Image
          source={require('../assets/FINIFI.jpg')}
          style={{ width: 350, height: 150 }}
        />
        
        </TouchableOpacity>

        <MyHeader title="Welcome" />

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


            
          
          
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor:'red',
              width: 275,
              textAlign: 'center',
            }}
            onPress={this.pressed}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
            HELP !
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor:'red',
              width: 275,
              textAlign: 'center',
            }}
            onPress={this.pressed}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
            Call Your Doctor!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

