import React from 'react'
import { Flex, Text, Pressable } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

interface Props {
  customTitle?: string;
  children?: any;
  close?: () => {};
  closeIcon?: string;
  icon?: string;
  action?: () => {};
  centerTitle?: number | string;
}

const Header: React.FC<Props> = ({
  customTitle,
  close,
  closeIcon,
  centerTitle,
  icon,
  action,
}) => {
  return (
    <Flex flexDirection="row" bg="primary.300" alignItems="center" w='full' h="17.5">
      {closeIcon === 'none'
        ? null
        : <Pressable ml={2} onPress={close || action || null} color="primary.50">
          <Flex pl="1.5" pr={centerTitle || "33"}>
            <Icon name={closeIcon || icon || "close"} size={30} />
          </Flex>
        </Pressable>
      }
      <Text color="primary.50" fontWeight="bold" fontSize="5xl">
        {customTitle || ''}
      </Text>
    </Flex >
  )
}


export default Header;



