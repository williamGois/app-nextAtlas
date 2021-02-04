import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  value?: string;
}

const Input = (props: InputProps) => {
  const { value } = props;

  const [eyeIcon, setEyeIcon] = React.useState("visibility-off");
  const [isPassword, setIsPassword] = React.useState(true);

  const changePwdType = () => {
    setEyeIcon(isPassword ? "visibility" : "visibility-off");
    setIsPassword((prevState) => !prevState);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => console.log(text)}
        value={value}
      />
      {
        //   <Icon
        //   style={styles.icon}
        //   name={eyeIcon}
        //   size={25}
        //   type="MaterialIcons"
        //   onPress={changePwdType}
        // />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 33,
    right: 0,
  },
});

export default Input;
