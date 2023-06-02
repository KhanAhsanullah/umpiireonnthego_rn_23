import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTSIZE } from "../../constants";
import { ThemeContext } from "../../context";

export default Rating = (props) => {
  const {
    rating = 5,
    size = 10,
    ratingText,
    hideText = false,
    fontSize = 12,
    alignSelf,
    color = COLORS.rating,
    textColor = COLORS.white,
    style
  } = props;

  const [starCount, setstarCount] = useState(3);

  return (
    <View style={ style }>
      <View style={{ flexDirection: "row", alignSelf }}>
        { Array(rating).fill(0).map(() => (
          <Icon name="star" size={size} color={color} />
        ) )}
      </View>
      { !hideText && <Text style={[styles.textStyling, { fontSize, alignSelf, color: textColor }]}>{ratingText}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  textStyling: {
    marginTop: 3
  },
});
