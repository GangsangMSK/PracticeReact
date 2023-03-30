import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "첫번째 알림"
    },
    {
        message: "두번째 알림"
    },
    {
        message: "세번째 알림"
    },
];

let timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notifications: [],
        };
    }
    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Notification;