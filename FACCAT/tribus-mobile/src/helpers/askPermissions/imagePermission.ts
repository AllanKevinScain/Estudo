/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from "react";
import { PermissionsAndroid } from "react-native";


const requestImagePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "tRibus precisa acesso a sua galeria",
        message:
          "Para prosseguir com o envio da imagem, por favor, permita o acesso a suas fotos",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Negar",
        buttonPositive: "Permitir acesso"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permissão a câmera aceita");
      return true
    } else {
      console.log("Permissão a câmera negada");
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

export default requestImagePermission