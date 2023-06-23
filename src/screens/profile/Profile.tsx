import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Button, View, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../../types/Common';

const Profile = () => {
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProps>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PROFILE</Text>
    </View>
  );
};
export default Profile;
