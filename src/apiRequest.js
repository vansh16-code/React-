const apiRequest = async(url='', optionsObj=null, errMsg= null) => {
    try{
    const resposne = await fetch(url,optionsObj);
    if (!resposne.ok) throw Error ('Please reload the app');
}catch(err){
    errMsg=err.message;
}finally{
    return errMsg;
}
}

export default apiRequest;