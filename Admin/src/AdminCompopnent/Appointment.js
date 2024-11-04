import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/xxx/bookings/Admin');
            setAppointments(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateNotification1 = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/xxx/bookings/${id}/notification1`, { status });
            console.log(response.data);
            // Update notification status in the frontend
            setAppointments(prevState => prevState.map(appointment => {
                if (appointment.id === id) {
                    return { ...appointment, notification: status };
                }
                return appointment;
            }));
        } catch (error) {
            console.log(error);
        }
    };
    const updateNotification2 = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/xxx/bookings/${id}/notification2`, { status });
            console.log(response.data);
            // Update notification status in the frontend
            setAppointments(prevState => prevState.map(appointment => {
                if (appointment.id === id) {
                    return { ...appointment, notification: status };
                }
                return appointment;
          
            }));
        } catch (error) {
            console.log(error);
        }
    };

    // const removeAppointment = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:3001/api/xxx/${id}`);
    //         setAppointments(prevState => prevState.filter(appointment => appointment.id !== id));
    //         console.log('Appointment removed successfully');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
            </div>
            <div className="content">
                <h1>Manage Appointments</h1>
                <div className='parent-container'>
                    {appointments.map(appointment => (
                        <div className="appointment" key={appointment.id}>
                            <p><strong>Client Name:</strong>{appointment.clientName}</p>
                            <p><strong>Date:</strong>{appointment.scheduleDate}</p>
                            <p><strong>Time:</strong>{appointment.scheduleTime}</p>
                            <p><strong>Booked Service:</strong>{appointment.bookedService}</p>
                            <p><strong>Phone Number:</strong>{appointment.phoneNo}</p>

                            <button className="cancel-btn" onClick={() => updateNotification2(appointment.id, 'request is canceled')}>Cancel Appointment</button>
                   <button className="acceptButton" onClick={() => updateNotification1(appointment.id,'request is Approved')}>Accept Request</button>
                           {/* <button className="remove-btn" onClick={() => removeAppointment(appointment.id)}>Remove Appointment</button>  */}
                            <p>{appointment.notification}</p>
                            <br/><br/><br/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Appointment;