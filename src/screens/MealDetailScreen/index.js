import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../components';

export const MealDetailScreen = props => {
  const mealDetail = props.route.params.mealDetail;
  return (
    <View style={{flex: 1}}>
      <Header
        title={mealDetail.title}
        onBackClick={() => props.navigation.goBack()}
        onfavoriteClick
      />
      <Text>CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
