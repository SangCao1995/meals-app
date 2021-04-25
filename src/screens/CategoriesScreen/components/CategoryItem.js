import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export const CategoryItem = ({data, onPress}) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <ButtonComponent onPress={onPress}>
        <View style={[styles.categoryWrapper, {backgroundColor: data.color}]}>
          <Text
            numberOfLines={2}
            style={{fontFamily: 'OpenSans-Bold', fontSize: 21}}>
            {data.title}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  categoryWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
  },
});
