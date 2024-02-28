import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Flex } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import textConst from '@app/mocks/locales/pt.json'
import { borderColor } from 'styled-system';
interface Props {
  icon?: string;
  label?: string;
  isInvalid?: boolean,
  items: Array<{ id: number, label: string, value: string }>;
  selectedValue?: any,
  onValueChange: any,
}

const SelectCustom: React.FC<Props> = ({
  icon,
  label,
  items,
  isInvalid,
  selectedValue,
  onValueChange
}) => {

  return (
    <>
      <Text bold fontSize="md" ml='2.5' color="primary.400" mb='1' >
        {label || ''}
      </Text>
      <View style={{
        height: 47,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 35,
        backgroundColor: '#FFF',
        borderColor: isInvalid ? '#dc2626' : '#000',
      }}>
        <Picker
          selectedValue={selectedValue || ''}
          onValueChange={onValueChange}
          style={{ color: (selectedValue || '') === '' ? '#C7C7CD' : '#000' }}
        >
          <Picker.Item key={0} label={textConst.selectLabel} value={''} style={{ color: '#C7C7CD' }} />
          {items.map((item) => (
            <Picker.Item key={item.id} label={item.label} value={item.value} style={{ color: '#000' }} />
          ))}
        </Picker>
        <Flex pl={5} position="absolute" top={3}>
          <Icon name={icon} size={25} />
        </Flex>
      </View>
    </>
  );
};

export default SelectCustom;
