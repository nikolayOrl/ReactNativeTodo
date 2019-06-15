import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

const notDoneIcon = require('./assets/circle.png')
const doneIcon = require('./assets/check-symbol.png')
const deleteIcon = require('./assets/trash.png')

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.fadeIn = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.fadeIn, {
      toValue: 50,
    }).start();
  }
  render() {
    const {
      item,
      onToggleItem,
      onDeleteItem,
    } = this.props;
    return (<Animated.View
        style={[styles.item, {
          height: this.fadeIn,
        }]}
      >
        <TouchableOpacity
          onPress={onToggleItem}
        >
          <Image
            source={item.done ? doneIcon : notDoneIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={{ flex: 1}}>
          <Text
            style={[
              styles.itemText,
              item.done ? styles.textDone : null
            ]}
          >
            {item.text}
          </Text>
        </View>
        <TouchableOpacity onPress={onDeleteItem}>
          <Image
            source={deleteIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>);
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    height: 0,
    borderBottomWidth: 1,
    borderColor: '#dadada',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  textDone: {
    textDecorationLine: 'line-through',
  },
});
