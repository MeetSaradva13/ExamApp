import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

interface ContactEditPageProps {
    contactData: any;
    onUpdateContact: any;
}

const ContactEditPage = (props: ContactEditPageProps) => {
    console.log('ContactEditPage', props.route.params.contactData);

    const { contact, onUpdateContact } = props.route.params.contactData;

    const [firstName, setFirstName] = React.useState(contact ? contact.firstName : '');
    const [lastName, setLastName] = React.useState(contact ? contact.lastName : '');
    const [phoneNumber, setPhoneNumber] = React.useState(contact ? contact.phoneNumber : '');
    const [email, setEmail] = React.useState(contact ? contact.email : '');
    const [birthDate, setBirthDate] = React.useState(contact ? contact.birthDate : '');

    function validatePhoneNumber(phoneNumber: string) {
        // Regular expression to match 10-digit phone numbers
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    function validateEmail(email: string) {
        // Regular expression to match email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function onSubmit() {
        if (!validatePhoneNumber(phoneNumber)) {
            Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        const highestId = Math.max(...props.route.params.contactData.map(contact => contact.id), 0);
        const id = highestId + 1;

        const updatedContact = { id, firstName, lastName, phoneNumber, email, birthDate };
        console.log('Updated Contact:', updatedContact);

        if (onUpdateContact) {
            onUpdateContact(updatedContact);
        }

        const updatedContactData = [...props.route.params.contactData, updatedContact];
        console.log('Updated Contact array:', updatedContactData);

        props.navigation.navigate('ContactListView', { contactData: updatedContactData });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />
            <TextInput
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={styles.input}
                maxLength={10}
                keyboardType='phone-pad'
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType='email-address'
            />
            <TextInput
                placeholder="Birth Date (YYYY-MM-DD)"
                value={birthDate}
                onChangeText={setBirthDate}
                style={styles.input}
                
            />
            <Button title="Save Contact" onPress={onSubmit} />
        </View>
    );
};

export default ContactEditPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});
