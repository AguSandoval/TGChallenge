import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BrandColors} from '../../constants';
import Animated, {LinearTransition} from 'react-native-reanimated';
import GeraldIcon from '../gerald-icon';

/**
 * @component CustomDrawer
 * @param @extends DrawerContentComponentProps
 *
 * A custom drawer component that displays the app's navigation routes.
 * it also includes mocked routes for 'Your Cart', 'Favourites', and 'Your Orders'.
 */
const CustomDrawer: React.FC<DrawerContentComponentProps> = ({
  navigation,
  state,
}) => {
  return (
    <Animated.View layout={LinearTransition} style={[styles.drawerBody]}>
      <GeraldIcon />

      {state.routeNames.map(routeName => {
        const isActive = state.routes[state.index].name === routeName;
        return (
          <TouchableOpacity
            key={routeName}
            activeOpacity={0.75}
            onPress={() => navigation.navigate(routeName)}
            style={isActive ? styles.activeRoute : styles.inactiveRoute}>
            <Text
              style={isActive ? styles.activeRouteText : styles.inactiveRoute}>
              {routeName}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* Mocked routes */}
      {['Your Cart', 'Favourites', 'Your Orders'].map(item => (
        <TouchableOpacity
          key={item}
          activeOpacity={0.75}
          style={styles.inactiveRoute}>
          <Text style={styles.inactiveRouteText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.bottomContainer}>
        <View style={styles.divider} />
        <TouchableOpacity activeOpacity={0.75} style={styles.inactiveRoute}>
          <Text style={styles.inactiveRouteText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerBody: {
    flex: 1,
    gap: 20,
    marginTop: 80,
    paddingHorizontal: 20,
    backgroundColor: BrandColors.primary,
  },
  activeRoute: {
    paddingVertical: 14,
    paddingLeft: 16,
    paddingRight: 40,
    borderRadius: 14,
    backgroundColor: `${BrandColors.secondary}50`,
    alignSelf: 'flex-start',
  },
  activeRouteText: {
    color: BrandColors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inactiveRoute: {
    paddingVertical: 14,
    paddingLeft: 16,
    paddingRight: 40,
    alignSelf: 'flex-start',
  },
  inactiveRouteText: {
    color: 'white',
    fontSize: 18,
  },
  divider: {
    marginVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
    opacity: 0.35,
  },
  bottomContainer: {
    flex: 1,
    gap: 20,
  },
});

export default CustomDrawer;
