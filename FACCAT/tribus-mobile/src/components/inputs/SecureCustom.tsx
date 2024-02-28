import React, { useState } from 'react';
import { Text, Input, Flex, Pressable, Box } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
interface Props {
  icon?: string;
  label?: string;
  placeholderTextColor?: string;
  variant?: string;
  size?: string;
  keyboardAppearance?: string;
  keyboardType?: string;
  returnKeyType?: string;
  maxLength?: number;
  textContentType?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  ref?: any;
  onTextChange?: (e: string) => void
  onFocus?: () => void;
  onBlur?: () => void
  onSubmitEditing?: () => void;
}

const SecureCustom: React.FC<Props> = ({
  icon,
  label,
  placeholderTextColor,
  variant,
  size,
  keyboardAppearance,
  keyboardType,
  returnKeyType,
  maxLength,
  textContentType,
  isFullWidth,
  isDisabled,
  isRequired,
  isReadOnly,
  isInvalid,
  ref,
  onTextChange,
  onFocus,
  onBlur,
  onSubmitEditing
}) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  return (
    <>
      <Text bold fontSize="md" ml='2.5' color="primary.400" mb='1'>
        {label || 'Senha'}
      </Text>
      <Flex>
        <Input
          secureTextEntry={!isPasswordVisible}
          pl={15}
          borderWidth={1}
          borderColor='dark.800'
          bg='primary.50'
          type="password"
          placeholder="•••••••••••••"
          placeholderTextColor={placeholderTextColor || 'primary.800'}
          //@ts-ignore
          variant={variant || 'rounded'}
          size={size}
          autoCorrect={false}
          //@ts-ignore
          keyboardAppearance={keyboardAppearance || 'default'}
          //@ts-ignore
          keyboardType={keyboardType || 'default'}
          //@ts-ignore
          returnKeyType={returnKeyType || 'done'}
          //@ts-ignore
          maxLength={maxLength ? maxLength : null}
          //@ts-ignore
          textContentType={textContentType || 'password'}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled || false}
          isRequired={isRequired || true}
          isReadOnly={isReadOnly || false}
          isInvalid={isInvalid || false}
          ref={ref}
          onChangeText={onTextChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
        />
        <Flex pl={5} position="absolute" top={3}>
          <Icon name="lock" size={25} />
        </Flex>
        <Pressable onPress={() => { setIsPasswordVisible(!isPasswordVisible) }}>
          <Box position="absolute" bottom={2} right={5}>
            <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={25} />
          </Box>
        </Pressable>
      </Flex>
    </>
  );
};

export default SecureCustom;
