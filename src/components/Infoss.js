import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

function Infoss() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/foss')
            .then(response => {
                setInfo(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/foss', { id, name })
            .then(response => {
                setInfo([...info, response.data]);
                setId('');
                setName('');
            })
            .catch(error => {
                console.error('There was an error submitting the data!', error);
            });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Student List</h1>
            <ul>
                {info.map(s => (
                    <li key={s.id}>{s.id} - {s.name}</li>
                ))}
            </ul>

            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter ID"
                    required
                />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}


export default Infoss;
