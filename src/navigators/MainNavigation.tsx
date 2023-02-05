import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';

const MainNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#32cbff',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        },
        styles.container
      ]}>
      <AppNavigator />
    </View>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
