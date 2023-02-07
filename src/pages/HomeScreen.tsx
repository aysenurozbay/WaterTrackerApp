import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WaterProcessComponent from '../components/WaterProcessComponent';

const HomeScreen = () => {
  return (
    <View style={styles.constainer}>
      <WaterProcessComponent/>
      {/* <Text>HomeScreen</Text> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent:'flex-start',
    alignItems:'center'
  }
});
