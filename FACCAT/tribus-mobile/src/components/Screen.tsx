import { Flex } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native'

interface Props {
  isScrollable?: boolean;
  children: any;
  padding?: any;
}

const Screen: React.FC<Props> = ({
  isScrollable,
  children,
  padding,
}) => {
  return (
    <>
      {isScrollable ? (
        <ScrollView style={{padding: padding}}>
          {children}
        </ScrollView>
      ) : (
        <Flex p={padding}>
          {children}
        </Flex>
      )}
    </>
  );
};

export default Screen;
