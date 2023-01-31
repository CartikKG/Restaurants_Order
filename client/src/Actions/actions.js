const registeredUser = async (data) => {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error)
  }
};
const loginUser = async (data) => {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error)
  }
};
const addOrderfun = async (data) => {
  let token=  localStorage.getItem('token')
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
         "Authorization":`${token}`
      },
      body: JSON.stringify(data),
    });
    let res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error)
  }
};
const getOrder=async(userId="")=>{
    let token=  localStorage.getItem('token')
    try {
        let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}/get-order`,{
            headers: {
               "Authorization":`${token}`
            }
            
        })
        let res2=await res.json();
        return res2;
    } catch (error) {
        console.log(error)
    }
}
export { registeredUser, loginUser, addOrderfun ,getOrder};
