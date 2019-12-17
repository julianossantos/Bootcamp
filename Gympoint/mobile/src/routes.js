import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import Questions from '~/pages/HelpOrders/Questions';
import NewQuestion from '~/pages/HelpOrders/NewQuestion';
import Answer from '~/pages/HelpOrders/Answer';

export default signedIn =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkins,
            HelpOrders: {
              screen: createStackNavigator(
                {
                  Questions,
                  NewQuestion,
                  Answer,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Pedir Ajuda',
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4d64',
              inactiveTintColor: '#c9c9c9',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
