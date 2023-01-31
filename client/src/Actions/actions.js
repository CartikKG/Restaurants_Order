const registeredUser = async (data) => {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res2=await res.json();
    return res2;
  } catch (error) {
    return error;
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
    let res2=await res.json();
    return res2;
  } catch (error) {
    return error;
  }
};
export {registeredUser, loginUser}