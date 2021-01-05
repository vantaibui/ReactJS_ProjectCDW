export const CreateAction = (type, payLoad) => {
  return {
    type,
    payLoad,
  };
};

export const CreateActionADD_UPDATE = (type, payLoad1, payLoad2) => {
  return {
    type: type,
    param1: payLoad1,
    param2: payLoad2,
  };
};
