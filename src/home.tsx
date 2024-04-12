import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
