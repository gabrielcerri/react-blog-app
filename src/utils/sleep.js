//aca simulamos que la api estaba tardando
//esto devuelve una promesa que después de 2seg
//se resuelve
//si no especificas el tiempo, por defecto es 2seg
export const sleep = (time = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
//cualquier función relevante a cualquier componente va en utils
//son funciones que nos ayudan para algo de manera en general que no tiene
//un impacto en general en toda la app
