

const getDbData = (type) => {
    const dbData = JSON.parse(window.localStorage.getItem(type));
    return dbData;
}
const writeToDb = (type, data) => {
    window.localStorage.setItem(type, JSON.stringify(data))
    return true;
}

const verifyUserEmailAndPassword = (email, password) => {
    let dbData = getDbData("users");
    if (Object.keys(dbData).includes(email)) {
        let user = dbData[email];
        if (user.password === password) {
            return user;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

export const postLogin = (inputData) => {
    const { email, password } = inputData;
    const outputData = verifyUserEmailAndPassword(email, password);
    if (outputData) {

        return { isError: false, value: outputData }
    }
    else {
        return { isError: true, value: "no user exists" }
    }
}
export const sortByDate = (mails) => {
    console.log(mails.sort((a, b) => new Date(b.date) - new Date(a.date)))
    return mails.sort((a, b) => new Date(b.date) - new Date(a.date));
}
export const getMails = (mailType, user) => {
    let messagesDb = getDbData("messages");
    console.log(messagesDb, mailType, user)
    let toMailDb = getDbData("toMails");
    let userMails = [];
    if (mailType == "inbox") {
        // let userMails=toMailDb.filter((data)=>data.toMail===user);
        for (let message of Object.values(messagesDb)) {
            console.log(message);
            if (message.to.includes(user) || message.cc.includes(user)) {
                userMails.push(message)
            }
        }

    }
    if (mailType == "sent") {
        for (let message of Object.values(messagesDb)) {
            console.log(message.fromMail, user)
            if (message.fromMail === user) {
                userMails.push(message)
            }
        }
    }
    console.log(userMails)
    userMails = sortByDate(userMails);
    return userMails;
}
export const sendThisMail = (content) => {
    let db = getDbData("messages");
    db[content["mid"]] = content;
    console.log(db)
    writeToDb("messages", db);
    return true;
}
export const updateReadList = (mid, readBy) => {
    let db = getDbData("messages")
    let unread = db[mid].unread;
    unread = unread.filter(val => val !== readBy);
    db[mid].unread = unread;
    writeToDb("messages", db);
}
export const deleteMails =(deleteIds)=>{
    let db = getDbData("messages")
    for(let id of deleteIds){
        delete db[id]
    }
    writeToDb("messages", db);
}