import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageService = () => {
    const [Services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    // fetch('/upload', {
    //     method: 'POST',
    //     body: new FormData(document.getElementById('file-input')),
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/xxx');
            setServices(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const removeFromCart = (service) => {
        setSelectedServices(selectedServices.filter(item => item.id !== service.id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateNotification(currentService.id);
            setFormData({
                name: '',
                description: '',
                price: ''
            });
            setShowForm(false);
            setCurrentService(null);
            alert('Service updated successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    const updateNotification = async (id) => {
        const data = {
            name: formData.name,
            description: formData.description,
            price: formData.price
        };
        try {
            const response = await axios.put(`http://localhost:3001/api/xxx/${id}/notification`, data);
            console.log(response.data);
            // Update notification status in the frontend
        } catch (error) {
            console.log(error);
        }
    };

    const toggleForm = (service) => {
        setShowForm(!showForm);
        setCurrentService(service);
        setFormData({
            name: service.name,
            description: service.description,
            price: service.price
        });
    };


            return ( <>
                <div className="sidebar">
                <h2>Admin Panel</h2>
                </div>
                <div className="content">
                <h1>Manage Services</h1>
                
                <div className="Service">
                {Services.map(Service => (
            <div className="appointment" key={Service.id}>
                <p><strong>Service name:</strong>{Service.name}</p>
                <p><strong>Description<br/></strong>{Service.description}</p>
                <p><strong>Price:</strong>{Service.price}</p>
            
                            {selectedServices.some(item => item.id === Service.id) ? (
                                <button className='btn' onClick={() => removeFromCart(Service)}>Close</button>
                            ) : (
                                <button className='btn' onClick={() => toggleForm(Service)}>
                                    {showForm && currentService && currentService.id === Service.id ? 'Close' : 'Edit Service'}
                                </button>
                            )}
                            {currentService && currentService.id === Service.id && showForm && (
                                <div style={{ border: '1px solid blue', padding: '10px', margin: '10px',borderRadius:'20%'}}>
                                    <form onSubmit={(e) => handleSubmit(e, Service)}>
                                        <label>New service name:
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                        </label>
                                        <br /><br />
                                        <label>
                                        New Description:
                                        <textarea type="text" name="description" value={formData.description} onChange={handleChange} ></textarea>
        </label>
                                        <br /> <br />
                                        <label>
                                            Price:
                                            <input type="text" name="price" value={formData.price} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <button type="submit">Update</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
        
                </div>
                </div>
                </>);
        }
        
        export default ManageService;