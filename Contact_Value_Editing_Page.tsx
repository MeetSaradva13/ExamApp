import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ContactValueEditingPageProps {}

const ContactValueEditingPage = (props: ContactValueEditingPageProps) => {
  return (
    <View style={styles.container}>
      <Text>ContactValueEditingPage</Text>
    </View>
  );
};

export default ContactValueEditingPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  }
});
