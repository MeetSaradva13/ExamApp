import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button, Image, TouchableOpacity, TextInput } from 'react-native';

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    // Define other fields as needed
}

interface ContactListViewProps {
    navigation: any;
    route: any;
}

const ContactListView = (props: ContactListViewProps) => {
    const [contactData, setContactData] = useState<Contact[]>(props.route.params?.contactData || []);
    const [searchText, setSearchText] = useState<string>('');
    const [isSortedAscending, setIsSortedAscending] = useState<boolean>(true);

    useEffect(() => {
        setContactData(props.route.params?.contactData || []);
    }, [props.route.params?.contactData]);

    const deleteContactItem = (id: number) => {
        const updatedContacts = contactData.filter(contact => contact.id !== id);
        setContactData(updatedContacts);
    };

    const filterContacts = (contacts: Contact[], text: string) => {
        return contacts.filter(contact =>
            contact.firstName.toLowerCase().includes(text.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(text.toLowerCase()) ||
            contact.phoneNumber.toString().includes(text)
        );
    };

    const sortContacts = (contacts: Contact[], ascending: boolean) => {
        return contacts.slice().sort((a, b) => {
            const comparison = ascending ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName);
            return comparison;
        });
    };

    const toggleSorting = () => {
        setIsSortedAscending(!isSortedAscending);
    };

    const filteredContacts = filterContacts(contactData, searchText);
    const sortedContacts = sortContacts(filteredContacts, isSortedAscending);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder='Search by first name, last name, or phone number'
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={toggleSorting}>
                <Image source={require('./assests/images/filter.png')} style={{ tintColor: 'white' }} />
            </TouchableOpacity>
            <FlatList
                data={sortedContacts}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.firstName} {item.lastName}</Text>
                        <Text>{item.phoneNumber}</Text>
                        <TouchableOpacity onPress={() => deleteContactItem(item.id)}>
                            <Image source={require('./assests/images/delete.png')} style={{ tintColor: 'white' }} />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addButtonView}
                onPress={() => props.navigation.navigate('ContactEditPage', {
                    contactData: contactData,
                })}
            >
                <Image source={require('./assests/images/Add.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    addButtonView: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        borderRadius: 20,
        marginVertical: 5,
        paddingLeft: 13.69,
        backgroundColor: 'grey'
    }
});

export default ContactListView;
