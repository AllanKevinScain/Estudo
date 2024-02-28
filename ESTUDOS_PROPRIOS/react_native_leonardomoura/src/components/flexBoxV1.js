import React from 'react';
import { View, StyleSheet } from 'react-native';

import Squad from './layout/Quadrado';

export default props => {
  return (
    /*  <View style={style.flex1}>
       <Squad />
       <Squad cor="#f00" />
       <Squad cor="#ff0" />
       <Squad cor="#0f0" />
       <Squad cor="#009" />
     </View> */
    /* <View style={style.flex2}>
      <Squad />
      <Squad cor="#f00" />
      <Squad cor="#ff0" />
      <Squad cor="#0f0" />
      <Squad cor="#009" />
    </View> */
    <View style={style.flex4}>
      <View style={style.v0} />
      <View style={style.v1} />
      <View style={style.v2} />
    </View>
  )
}


const style = StyleSheet.create({
  flex1: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  flex2: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  flex3: {
    backgroundColor: '#fff',
    height: 350,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex4: {
    backgroundColor: '#fff',
    flexGrow: 1,
    width: 100,
  },
  v0: {
    backgroundColor: '#fff',
  },
  v1: {
    backgroundColor: '#009',
    flexGrow: 1,
  },
  v2: {
    backgroundColor: '#050',
    flexGrow: 1,
  }
})