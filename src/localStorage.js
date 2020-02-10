let UsersData = {
    "sravan@email.com":{ email:"sravan@email.com", password : "1234", fullName : "sravan"},
    "bala@email.com": {email:"bala@email.com", password : "1234", fullName : "bala"},
    "vishnu@email.com":{email:"vishnu@email.com", password : "1234", fullName : "vishnu"},
    "naidu@email.com":{email:"naidu@email.com", password : "1234", fullName : "naidu"}    
}
let id1 =(Math.random()*8).toString(16).replace(".","") ;
let id2 =(Math.random()*8).toString(16).replace(".","") ;
let MessagesData = {
    [id1]: { mid:id1 , date: new Date().toGMTString(), subject : "hello", body: "hi sravan from bala", fromMail : "bala@email.com"},
    [id2]: {mid: id2,date: new Date().toGMTString(), subject : "hi",body: "hi sravan, bala from sravan", fromMail : "sravan@email.com"},
}
let ToData = [
    { mid: id1,toMail : "sravan@email.com"},
    {mid: id2, toMail : "sravan@email.com"},
    {mid: id2, toMail : "bala@email.com"},
];

export const createUsers=() => 
{
    if(!window.localStorage.getItem("users")){
        window.localStorage.setItem("users",JSON.stringify(UsersData));
    }
}

export const createMessages=()=>{
    if(!window.localStorage.getItem("mesages")){
        window.localStorage.setItem("messages",JSON.stringify(MessagesData));
    }
}

export const createToBox= ()=>{
    if(!window.localStorage.getItem("toMails")){
        window.localStorage.setItem("toMails",JSON.stringify(ToData));
    }
}