import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactListView from './Contact_List_View';
import ContactEditPage from './Contact_Edit_Page';
import ContactValueEditingPage from './Contact_Value_Editing_Page';

interface ContactListStackPageProps {}

const Stack = createNativeStackNavigator();

const ContactListStackPage = (props: ContactListStackPageProps) => {
  return (
    <View style={styles.container}>
      {/* <Text>ContactListStackPage</Text> */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ContactListView" component={ContactListView} />
        <Stack.Screen name="ContactValueEditingPage" component={ContactValueEditingPage} />
        <Stack.Screen name="ContactEditPage" component={ContactEditPage} />

      </Stack.Navigator>

      </NavigationContainer>
      
    </View>
  );
};

export default ContactListStackPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
