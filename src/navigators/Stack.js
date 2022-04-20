import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, coursesList,MyRoadmaps,createRoadmap, initRoadmap, updateInitRoadmap, updateRoadmap} from '../screens';
import Login from '../screens/Login';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Roadmaps"
        component={MyRoadmaps}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="coursesList"
        component={coursesList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="initRoadmap"
        component={initRoadmap}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="createRoadmap"
        component={createRoadmap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="updateInitRoadmap"
        component={updateInitRoadmap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="updateRoadmap"
        component={updateRoadmap}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack">
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
