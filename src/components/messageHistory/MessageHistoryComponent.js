import React from 'react';
import "./messageHistory.css";

const MessageHistoryComponent = ({message}) => {
    console.log(message)
    return (message.map((row, i) => {
            return (
                <div className="message-history mt-3" id={i}>
                <div className="send fw-bold mt-3">
                    <div className="sender">{row.messageBy}</div>
                    <div className='date'>{row.date}</div>
                </div>
                <div className="message">{row.message}</div>
                </div>
            )
        }));
};

export default MessageHistoryComponent;