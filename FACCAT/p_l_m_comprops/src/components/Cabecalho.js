import React from 'react';
import { Image } from 'react-native';

import Txt from './Text';

export default ({ largura, altura, texto, textoLink }) => <>
  <Image
    source={require("../assets/logo.png")}
    style={{
      width: largura,
      height: altura,
    }}
  />
  <Txt texto={texto} link={textoLink} />
</>
