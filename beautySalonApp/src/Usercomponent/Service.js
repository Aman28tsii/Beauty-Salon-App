import React, { useState, useEffect } from 'react';
import axios from 'axios';
import serviceData from './serviceData';

const Service = ({ token }) => {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [formData, setFormData] = useState({
        clientName: '',
        scheduleTime: '',
        scheduleDate: '',
        phoneNo: '',
        bookedService: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e, service) => {
        e.preventDefault();

        try {
            if (!token) {
                // Handle case where token is missing
                return;
            }

            const data = {
                clientName: formData.clientName,
                scheduleTime: formData.scheduleTime,
                scheduleDate: formData.scheduleDate,
                phoneNo: formData.phoneNo,
                bookedService: service.name
            };

            await axios.post('http://localhost:3001/api/xxx/bookings', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setFormData({
                clientName: '',
                scheduleTime: '',
                scheduleDate: '',
                phoneNo: '',
                bookedService: ''
            });
            setShowForm(false);
            setCurrentService(null);

            alert('Booking submitted successfully!');
        } catch (error) {
            console.error(error);
            // Handle error in case of failed booking
        }
    };

    useEffect(() => {
        console.log("isDivVisible:", isDivVisible);
    
        if (isDivVisible && token) {
            getAppointments(token);
        }
    }, [token, isDivVisible]);


  // Updated GET request to fetch appointments with sample data format
const getAppointments = async (token) => {
    try {
        const response = await axios.get('http://localhost:3001/api/xxx/bookings', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Assuming the response data structure is an object with a 'data' property containing an array of appointments
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
            setAppointments(response.data.data);
            setIsDivVisible(true);
        } else {
            console.error('Invalid data structure in API response');
        }
    } catch (error) {
        console.error('Error fetching appointments:', error);
    }
};
    const toggleForm = (service) => {
        setShowForm(!showForm);
        setCurrentService(service);
        setFormData({
            ...formData,
            bookedService: service.name
        });
    };

    const handleToggleDiv = () => {
        setIsDivVisible(!isDivVisible);
    };
    const DeleteRequest = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/xxx/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));
        } catch (error) {
            console.error('Error deleting appointment: ', error);
        }
    };
    return (
        <div className='services-container'>
            <h1 className='section-title2'>services</h1>
            <div className='border'></div>
            <div className='service-container2'>
                {serviceData.map(serviceItem => (
                    <div className='service-box' key={serviceItem.id}>
                        <div className='service-icon'><img src={serviceItem.src} alt={serviceItem.name} /></div>
                        <div className='service-title'>
                            <b>{serviceItem.name} (${serviceItem.price})</b>
                        </div>
                        <div className='description'>{serviceItem.description}</div>
                        {showForm && currentService && currentService.id === serviceItem.id ? (
                            <button className='btn' onClick={() => toggleForm(serviceItem)}>Close</button>
                        ) : (
                            <button className='btn' onClick={() => toggleForm(serviceItem)}>
                                Book Now
                            </button>
                        )}
                        {currentService && currentService.id === serviceItem.id && showForm && (
                            <div style={{ border: '1px solid pink', padding: '10px', margin: '10px', borderRadius: '20%' }}>
                                <form onSubmit={(e) => handleSubmit(e, serviceItem)}>
                                    <label>
                                        <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Client Name" />
                                    </label>
                                    <br />
                                    <label>
                                        Select a Time:
                                        <input type="time" name="scheduleTime" value={formData.scheduleTime} onChange={handleChange} />
                                    </label>
                                    <br />
                                    <label>
                                        Select a Date:
                                        <input type="date" name="scheduleDate" value={formData.scheduleDate} onChange={handleChange} />
                                    </label>
                                    <br />
                                    <label>
                                        Phone No:
                                        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" />
                                    </label>
                                    <br />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <br /> <br /> <br /> <br /> <br />
            <div>
            <button className="btn" onClick={handleToggleDiv}>
                {isDivVisible ? 'Hide' : 'Show Appointment'}
            </button>
            
            {isDivVisible  && appointments.length > 0 && (
                <div className="appointment-list" style={{ border: '1px solid pink', padding: '10px', margin: '10px' }}>
                    {appointments.map(appointment => (
                        <div className="appointment-item" key={appointment.id}>
                            <p><strong>Date:</strong>{appointment.scheduleDate}</p>
                            <p><strong>Time:</strong>{appointment.scheduleTime}</p>
                            <p><strong>Booked Service:</strong>{appointment.bookedService}</p>
                            <br />
                            {appointment.notification}
                            <br /><br />
                            <button className="cancel-btn" onClick={() => DeleteRequest(appointment.id)}>Cancel Appointment</button>
                            <br />
                        </div>
                    ))}
                </div>
            )}
        
            </div>
        </div>
    );
};

export default Service;