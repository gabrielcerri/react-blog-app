//lo usamos para manejar estados dentro de toda la app
//ya que solamente manejamos estados dentro de cada componente
//el useContext nos permite manejar ese estado dentro de toda la app
//llamados estados globales
//useContext nos permite crear diferentes espacios de información y guardar distintas variables en "contextos"

import React from "react";

export const UserContext = React.createContext(); //createContext nos crea un espacio donde vamos a poder almacenar información

//UserContext tiene ahora dos partes:
// un provider y un consumer
// el provider va a ser el que va a distribuir la información
// el consumer es el que la va a usar
// el provider tiene que distribuir la información a todo lo que nosotros querramos que acceda
