import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageHobbiesInterests from './Home_Hobbies_Interets';
import HomePage from './home';
import HighliteSelect from './Highlite_Select';

interface NavigationScreenFlowProps {}
const Stack = createNativeStackNavigator();

const NavigationScreenFlow = (props: NavigationScreenFlowProps) => {
  return (
    <View style={styles.container}>
      {/* <Text>NavigationScreenFlow</Text> */}
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='HomePageHobbiesInterests'>
            <Stack.Screen name='HomePageHobbiesInterests' component={HomePageHobbiesInterests} options={{ headerShown: false }}/>
            <Stack.Screen name='HighliteSelect' component={HighliteSelect} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
};

export default NavigationScreenFlow;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
