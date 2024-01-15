import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={{ color: '#fff' }}>Profile</Text>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
});
