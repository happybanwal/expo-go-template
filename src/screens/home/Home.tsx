import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Button, View, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../../types/Common';

const Home = () => {
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProps>();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className={`text-[#FF0000]`}>HOME</Text>
    </View>
  );
};
export default Home;
