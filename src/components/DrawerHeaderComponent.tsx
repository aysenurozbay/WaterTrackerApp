import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MenuIcon from '../assets/icons/MenuIcon';

interface IDrawerHeaderComponentProps {
  navigation: any;
  route: any;
  options: any;
}

const DrawerHeaderComponent = ({ navigation, route, options }: IDrawerHeaderComponentProps) => {
  //   const na = navigation.navigate('Week');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MenuIcon fill="black" size={25} />
        {/* <Text style={{color: 'red'}}>{route.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeaderComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor: 'transparent',
  }
});
