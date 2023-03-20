import axios from "axios";

export const fetchApi = async ()=>{
  const response = await fetch('http://localhost:3001/product/read');
  resJson=response.json();
  return resJson;
};

export const fetchPostApi = async (data)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    resJson=response.json();
    return resJson;
  };
  

export const getAxiosApi = async()=>{
    const res = await axios({
        method:'get',
        url:'http://192.168.0.112:3001/product/read',            ///// api ip address needed
    });
    return res;
} 

export const deleteAxios = async() =>{
  const res = await axios({
    method:'delete',
    url:'http://192.168.0.112:3001/product/delete/3',
    
  });
  return res;
}

export const postAxiosApi = async(data)=>{
  const res = await axios({
      method:'post',
      url:'http://192.168.0.112:3001/product/create',
      data:data
  });


  return res;
} 

export const searchAxiosApi = async (data) =>{
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/find/employee',
    data:data
  });
  console.log('emp',res.data);

   if(res.data.message == "Employee Not Found"){
    let response=searchUserAPi(data);
    return response;
   }else {return res;}
      
            
 

}
export const searchUserAPi =async (data) =>{
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/find/user',
    data:data
  });
  console.log('user',res.data);

  if(res.data.message == 'User Not Found'){
    let response = createUserApi(data);
    return response;
  }else {return res;}
 
}

export const createUserApi = async(data) =>{
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/user/register',
    data:data
  });
  console.log('user created data',res.data.message);
  return res;
  
}

export const sendOtp = async (data) =>{
  const res = await axios({
    method :'post',
    url:'https://amsweets.in/otp/',
    data:data
  });
  return res;
}

export const setPasswordApi = async (data) =>{
  const res = await axios({
    method :'patch',
    url:'https://amsweets.in/set/Password',
    data:data
  });
  return res;
}

export const LoginApi = async (data) =>{
  const res = await axios({
    method :'post',
    url:'https://amsweets.in/login/',
    data:data
  });
  return res;
}

export const ChangePasswordApi = async (data) =>{
  const res = await axios({
    method :'patch',
    url:'https://amsweets.in/chng/Password',
    data:data
  });
  return res;
}