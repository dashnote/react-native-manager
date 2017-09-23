import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Spinner } from './common';

class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>
          AlbumList!!!!
        </Text>
        <Spinner />
      </View>
    );
  }
}

export default AlbumList;
