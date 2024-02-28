import React from 'react';

//UI Kitten Components
import {
  Button
} from '@ui-kitten/components';

export default ({
  customSize,
  customBorderColor,
  customBackgroundColor,
  customWidth,
  textContent,
  onFunction
}) => {
  return (
    <>
      <Button
        onPress={onFunction}
        appearance="filled"
        size={customSize}
        style={{
          borderColor: customBorderColor,
          backgroundColor: customBackgroundColor,
          width: customWidth,
        }}
      >
        {textContent}
      </Button>
    </>
  )
}