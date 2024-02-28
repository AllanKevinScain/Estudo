import React from 'react';
import { ScrollView, Heading } from 'native-base';

interface Props {
  navigation: any
}

export const Dashboard: React.FC<Props> = ({ navigation }) => {

  return (
    <>
      <ScrollView>
        <Heading>vudu é pra jaku</Heading>
      </ScrollView>
    </>
  )
}

