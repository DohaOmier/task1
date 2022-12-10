import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <SafeAreaView>
    <view style={styles.container}>
      <text style={styles.Text}>Boxes With Differant colors</text>
      <Box title={"cyan:#2aa198"}> bgColor={"#2aa198"}</Box>
      <Box title={"Blue:#268bd2"}> bgColor={"#268bd2"}</Box>
      <Box title={"Magenta:#d33682"}> bgColor={"#d33682"}</Box>
      <Box title={"Orange:#cb4b16"}> bgColor={"#cb4b16"}</Box>
      <text style={styles.text}> Doha Omier</text>

    </view>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    padding:20,
  },
  text:{
    marginBottom:20,
    fontWeight:'bold',
    fontSize:16,
  }
});
