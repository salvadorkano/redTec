import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import show from 'icons/show.png';
import {normalize} from 'utils/normalize';
import {styling} from './styles';

interface propsInputComponent {
  isAdd?: boolean;
  rightPress?: () => void;
  placeholder: string | undefined;
  value: string | undefined;
  upperText?: boolean;
  leftText?: number;
  type?: string;
  style?: ViewStyle;
  editable?: boolean;
  returnType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
  onChange: (text: string) => void;
  multi?: boolean;
  placeholderIsTop?: boolean;
  rightImage?: ImageSourcePropType | null;
}
function InputComponent(props: propsInputComponent) {
  const {
    style,
    leftText,
    returnType,
    keyboardType,
    onChange,
    value,
    placeholder,
    multi,
    editable,
    placeholderIsTop,
    isAdd,
    rightImage,
    type,
    rightPress,
  } = props;
  const styles = styling(
    leftText,
    style,
    multi,
    editable,
    placeholderIsTop,
    isAdd,
  );
  let isSecure = type === 'password';
  let [secure, setSecure] = useState(isSecure);
  return (
    <View
      style={{
        width: style?.width ?? '100%',
        marginTop: style?.top ?? normalize(15),
        zIndex: style?.zIndex ?? 99999,
      }}>
      {props?.upperText ? (
        <Text style={[styles.textTop]}>{props?.upperText}:</Text>
      ) : null}
      <View style={styles.containerInput}>
        <TextInput
          editable={editable ?? true}
          style={styles.inputStyle}
          returnKeyType={returnType ?? 'done'}
          allowFontScaling={false}
          keyboardType={keyboardType}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          // placeholderTextColor={style?.textcolor ?? colors.black}
          secureTextEntry={secure}
          textContentType={'none'}
          multiline={multi}
        />

        {rightImage !== null && rightImage !== undefined ? (
          <TouchableOpacity
            onPress={() => {
              if (rightPress !== undefined) {
                rightPress();
              }
            }}
            style={styles.rightImageStyle}>
            <Image
              style={styles.imgStyle}
              resizeMode={'contain'}
              source={rightImage}
            />
          </TouchableOpacity>
        ) : null}
        {type === 'password' ? (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
            style={styles.passwordStyle}>
            <Image
              style={styles.imgPassword}
              resizeMode={'contain'}
              source={show}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default InputComponent;
