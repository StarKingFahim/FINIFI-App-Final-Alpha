import * as React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,  
  Alert
} from 'react-native';
import firebase from 'firebase';

export default class DoctorScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        emailid: '',
        password: '',
        doctor:"",
        expertise:"",
        present:"",
        name:"",
        emails:"",
        number:0,
      };
    }
    
    addDoctor = ()=>{
      db.collection("Doctor_Details").doc.add({
        name:this.state.name,
        emails:this.state.emails,
        number:this.state.number,
        expertise:this.state.expertise,
        present:this.state.present,
      });
      return(Alert.alert("Thank You For Signing Up"));
  }

    render() {
        return (
            <View>
                <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
           <Appbar.Header style={styles.header}>
          <Appbar.Content
            style={{ display: 'flex', alignItems: 'center' }}
            title="FINIFI"
          />
      
        </Appbar.Header>
        
        </TouchableOpacity>

        <MyHeader title="Doctor Screen" />

        
        <Text style={styles.quesText}>Are You a Doctor ?</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder="Yes/No"
            value={this.state.doctor}
            onChangeText={(doctor) => this.setState({ doctor })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.quesText}>Your Name</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder="Dr XYZ"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.quesText}>Email</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder="XYZ@gmail.com"
            value={this.state.name}
            onChangeText={(name) => this.setState({ emails })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.quesText}>Number</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder="Dr XYZ"
            value={this.state.name}
            onChangeText={(name) => this.setState({ number })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.quesText}>Your Expertise ?</Text>

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder="expertise"
            value={this.state.expertise}
            onChangeText={(expertise) => this.setState({ expertise })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.quesText}>Are You at present working in a Hospital for the Effected ?</Text>

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor:"#eeeeee",
            }}
            placeholder=""
            value={this.state.present}
            onChangeText={(present) => this.setState({ present })}
            multiline
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{
        this.addDoctor();
        this.setState({
          doctor:"",
          name:"",
          emails:"",
          number:"",
          expertise:"",
          present:"",
      })
      }}>
        <Text style={styles.submitButton}>Submit</Text>
        
        </TouchableOpacity>
        


        </KeyboardAvoidingView>
            </View>
        );
    }
}   

    const styles = StyleSheet.create({
        allText: {
          backgroundColor: '#989898',
          flex: 1,
        },
        header: {
          
          backgroundColor: '#ffffff',
        },
        quesText: {
          width: '90%',
          height: 20,
          backgroundColor: 'white',
          fontFamily: 'Eras Bold ITC',
          border: 'solid',
          padding: 20,
          marginLeft: 20,
          marginTop: 10,
          color: 'black',
          fontSize: 20,
        },
        submitButton: {
          backgroundColor: '#8a9bcd',
          width: '50%',
          height: 40,
          border: 'solid',
          marginTop: 10,
          padding: 5,
          marginLeft: 80,
        },
        buttonText: {
          fontFamily: 'britannic',
          textAlign: 'center',
          fontSize: 25,
        },
      });
      

