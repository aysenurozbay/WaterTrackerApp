import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => {
          return <DrawerHeaderComponent navigation={navigation} route={route} options={options} />;
        },
        sceneContainerStyle:{ backgroundColor: 'transparent'}
      }}
      >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Week" component={HomeScreen} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
