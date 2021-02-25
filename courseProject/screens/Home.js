import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Hello this is home</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPalette');
            }}>
            <Text style={styles.button}>click</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },

  button: {
    backgroundColor: '#191919',
    color: 'white',
    margin: 20,
    padding: 10,
    textAlign: 'center',
  },
});

export default Home;
