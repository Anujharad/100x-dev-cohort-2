const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require("zod");
 
const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);


function signJwt(username, password) {
    const userReponse = emailSchema.safeParse(username);
    const passResponse = passwordSchema.safeParse(password);
    if(!userReponse.success || !passResponse.success){
        return null;
    }
   const token= jwt.sign(
    {username},jwtPassword
  );
  return token;
}
 
function verifyJwt(token) {
  
  
  let answ = true;
  try{
    jwt.verify(token,jwtPassword);
    }
    catch(e){
      answ =false;
    }
  return answ;
    
}


function decodeJwt(token) {
  const ans = jwt.decode(token);
  if(ans){
    return true;
  }else{
    return false;
  }
    // Your code here
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
