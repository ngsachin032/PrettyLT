
  export const addAction = (data: any) => {
    return{
      type: 'addProduct',
      payload: data
    }
  };

  export const deleteAction = (data: any) => {
    return{
      type: 'deleteProduct',
      payload: data
    }
  };