import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
const EditStudentForm = ({ student, handleClose, handleEdit }) => {

    const [formData, setFormData] = useState({
        // name: student.name,
        // class: student.class
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(student.id, formData);
        handleClose();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                // value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Class"
                name="class"
                // value={formData.class}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Roll"
                name="roll"
                // value={formData.class}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button style={{ backgroundColor: 'red', color: 'black' }} type="submit">Save Changes</Button>
        </form>
    );
};

export default EditStudentForm;