import React from 'react';
import { Text, Input, Flex } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

interface Props {
  value?: string;
  icon?: string;
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  variant?: string;
  size?: string;
  autoCorrect?: boolean;
  autoCompleteType?: string;
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
  onTextChange?: (e: string) => void;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
}

const InputCustom: React.FC<Props> = ({
  value,
  icon,
  label,
  placeholder,
  placeholderTextColor,
  variant,
  size,
  autoCorrect,
  autoCompleteType,
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
  onSubmitEditing
}) => {
  return (
    <>
      <Text fontSize="md" bold ml='2.5' color="primary.400" mb='1'>
        {label || null}
      </Text>
      <Flex>
        <Input
          value={value}
          pl={15}
          bg='primary.50'
          borderWidth={1}
          borderColor='dark.800'
          placeholder={placeholder || ''}
          // placeholderTextColor={placeholderTextColor || 'primay.800'}
          variant={variant || 'rounded'}
          size={size}
          autoCorrect={autoCorrect || false}
          //@ts-ignore
          autoCompleteType={autoCompleteType || 'off'}
          //@ts-ignore
          keyboardAppearance={keyboardAppearance || 'default'}
          //@ts-ignore
          keyboardType={keyboardType || 'default'}
          //@ts-ignore
          returnKeyType={returnKeyType || 'done'}
          //@ts-ignore
          maxLength={maxLength ? maxLength : null}
          //@ts-ignore
          textContentType={textContentType || 'none'}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled || false}
          isRequired={isRequired || true}
          isReadOnly={isReadOnly || false}
          isInvalid={isInvalid || false}
          ref={ref}
          onChangeText={onTextChange}
          onFocus={onFocus}
          onSubmitEditing={onSubmitEditing}
        />
        <Flex pl={5} position="absolute" top={3}>
          <Icon name={icon} size={25} />
        </Flex>
      </Flex>
    </>
  );
};

export default InputCustom;
