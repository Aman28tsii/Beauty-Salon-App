import React from 'react';
import axios from 'axios';

const NotificationComponent = ({ id, notificationType }) => {

    const handleNotificationUpdate = (notificationType) => {
        let notificationMessage = '';

        if(notificationType === 'approved'){
            notificationMessage = 'Appointment is approved';
        } else if(notificationType === 'cancelled'){
            notificationMessage = 'Appointment is cancelled';
        }

        axios.put(`/api/updateNotification/${id}`, { notificationMessage })
            .then(response => {
                console.log(response.data); // Assuming response contains a success message
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={() => handleNotificationUpdate('approved')}>Mark as Approved</button>
            <button onClick={() => handleNotificationUpdate('cancelled')}>Mark as Cancelled</button>
        </div>
    );
};

export default NotificationComponent;