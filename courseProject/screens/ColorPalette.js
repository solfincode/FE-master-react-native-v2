import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ColorBox from '../components/ColorBox';
//component
import Food from '../components/Food';
const Foods = ['apple', 'banana', 'cookies', 'doritos', 'eclairs'];

const ColorPalette = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ColorBox
              style={[styles.orange, styles.text]}
              name="hello react native"
            />
            <ColorBox
              style={[styles.blue, styles.text]}
              name="hello react native2"
            />
            <ColorBox
              style={[styles.green, styles.text]}
              name="hello react native3"
            />
            <ColorBox
              style={[styles.pink, styles.text]}
              name="hello react native4"
            />
          </View>
          <FlatList
            style={styles.container}
            data={Foods}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <Food style={[styles.gray, styles.text]} name={item} />
            )}
            ListHeaderComponent={<Text style={styles.title}>Fruits</Text>}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    padding: 15,
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  orange: {
    backgroundColor: 'orange',
  },
  pink: {
    backgroundColor: 'pink',
  },
  gray: {
    backgroundColor: '#191919',
  },
});

export default ColorPalette;
