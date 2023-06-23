import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../types/Common';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Login = () => {
  type loginScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
  >;
  const navigation = useNavigation<loginScreenProps>();

  return (
    <View className="flex-1 justify-center items-center ">
      <Button
        mode="contained"
        onPress={() => navigation.navigate('BottomTabNavigator')}
      >
        Login
      </Button>
    </View>
  );
};

export default Login;
