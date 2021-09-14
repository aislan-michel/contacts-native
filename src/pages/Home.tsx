import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Platform, FlatList, Alert} from 'react-native';
import {Button} from "../components/Button";
import {IPerson} from "../interfaces/IPerson";
import {PersonCard} from "../components/PersonCard";
import {IsNullOrEmpty} from "../validations/IsNullOrEmpty";
import {IsEmail} from "../validations/IsEmail";
import {IsTelephone} from "../validations/IsTelephone";

export function Home() {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const [persons, setPersons] = useState<IPerson[]>([]);
    
    function validations(): boolean {
        const title: string = 'Opss...';
        const messages: string[] = [];
                
        if(IsNullOrEmpty(name)){
            messages.push('name is empty');
        }

        if(IsNullOrEmpty(email) || !IsEmail(email)){
            messages.push('e-mail is empty or invalid');
        }

        if(IsNullOrEmpty(telephone) || !IsTelephone(telephone)){
            messages.push('phone is empty or invalid');
        }
        
        if(messages.length > 0){
            Alert.alert(title, messages.join('\n'));
            return false;
        }
        
        return true;
    }
    
    function handleAddNewPerson(): void {
        if(!validations()){
            return;   
        }
        
        const data: IPerson = {
            id: String(new Date().getTime()),
            name: name,
            email: email,
            telephone: telephone
        };

        setPersons([...persons, data]);

        setName('');
        setEmail('');
        setTelephone('');

        //storage.setItem('mykey', JSON.stringify(pessoas));
    }

    function handleRemovePerson(id: string): void {
        setPersons(persons.filter(p => p.id !== id));
    }

    return (
        <>
            <View style={styles.container}>
                
                <Text style={styles.title}>Welcome to your contact list</Text>

                <TextInput value={name} placeholder={'Name'} placeholderTextColor={'#555'} style={styles.input}
                           onChangeText={value => setName(value)} />

                <TextInput value={email} placeholder={'E-mail'} placeholderTextColor={'#555'} style={styles.input}
                           onChangeText={value => setEmail(value)} keyboardType={'email-address'} />

                <TextInput value={telephone} placeholder={'Telephone'} placeholderTextColor={'#555'} style={styles.input}
                           onChangeText={value => setTelephone(value)} keyboardType={"phone-pad"} maxLength={11} />  
                
                <Button title={'add'} onPress={handleAddNewPerson} />
                
                <Text style={[styles.title, { marginVertical: 30 }]}>Contacts</Text>

                <FlatList showsVerticalScrollIndicator={false} data={persons} keyExtractor={person => person.id}
                          renderItem={({item}) => 
                              <PersonCard 
                                  name={item.name} 
                                  email={item.email} 
                                  telephone={item.telephone} 
                                  onPress={() => handleRemovePerson(item.id)} 
                              />
                          }
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 7
    }
});