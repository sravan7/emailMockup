import React, { useState } from "react";



function MailAddress(props) {
    const [text,setText] = useState();
    const handleKeys=(e)=>{
        if(e.keyCode===13 || e.keyCode===188 ){
            console.log(e.target.value, e.target.value)
            let mail =e.target.value.replace(/\s|,/gi,"");
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
                props.handleAccept(props.type,mail)
            }
            e.target.value=""
        }
        else{
            console.log(e.target.value)
            // setText(e.target.value)
        }
        
    }
    return (
        
        <div className="popup-to-wrapper" >
            <div className="role-section">{props.type}:</div>
            <div className="popup-to">
                {
                    props.mails.map((val, index) => {
                        return <span key={val} className="to-accepted">
                            <span className="mail-text">{val}</span>
                            <img src={require("./img/close-24px.svg")} alt={"close icon"} className="removeIt" onClick={() => { props.handleRemove(props.type,val) }} />
                        </span>
                    })
                }
                <input id="to" className="textarea-to" onKeyUp={handleKeys} value={text} />
            </div>
        </div>
    )
}
export default MailAddress;