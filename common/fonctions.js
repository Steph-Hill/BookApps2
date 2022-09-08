export const existItem = ( data = [], id =  "" ) => {

    return data.find(item=>item.id == id) != undefined;

}

