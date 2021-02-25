import React from 'react';
import {View, Text} from 'react-native';

const Food = (props) => {
  return (
    <View>
      <Text style={props.style}>{props.name}</Text>
    </View>
  );
};

export default Food;
