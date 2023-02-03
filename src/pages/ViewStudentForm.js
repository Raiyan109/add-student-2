import React from 'react';
import { TextField } from '@mui/material';
const ViewStudentForm = ({ student }) => {
    return (
        <form>
            <TextField
                label="Name"
                // value={student.name}
                disabled
                fullWidth
                margin="normal"
            />
            <TextField
                label="Class"
                // value={student.email}
                disabled
                fullWidth
                margin="normal"
            />
            <TextField
                label="Roll"
                // value={student.email}
                disabled
                fullWidth
                margin="normal"
            />

        </form>
    );
};

export default ViewStudentForm;