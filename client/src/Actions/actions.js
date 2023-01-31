const registeredUser = async (data) => {
  try {
    let res = await fetch(`${REACT_APP_BACKEND_URL}/add-user`, {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    console.log(res)
  } catch (error) {
    console.log(error)
  }
};
const loginUser = async (data) => {
  try {
    let res = await fetch(`${REACT_APP_BACKEND_URL}/login-user`, {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    console.log(res)
  } catch (error) {
    console.log(error)
  }
};
