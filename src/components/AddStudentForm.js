import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const useStyles = styled((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    addStudentButton: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'red'
    }
}));
const AddStudentForm = () => {

    const classes = useStyles();

    const [classValue, setClassValue] = useState('');
    const [divisionValue, setDivisionValue] = useState('');
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [roll, setRoll] = useState();



    const handleClassChange = (event) => {
        setClassValue(event.target.value);
        setClassName(event.target.value)
    };

    const handleDivisionChange = (event) => {
        setDivisionValue(event.target.value);
    };

    const handleRollChange = (event) => {
        setRoll(event.target.value)
        const value = event.target.value;
        if (!/^\d{0,2}$/.test(value)) {
            event.target.value = value.slice(0, -1);
        }
    };

    const handlePinCodeChange = (event) => {
        const value = event.target.value;
        if (!/^\d{0,6}$/.test(value)) {
            event.target.value = value.slice(0, -1);
        }
    };

    const userCollectionRef = collection(db, 'contactData')
    const handleSubmit = (event) => {
        event.preventDefault();
        // your form submit function here
        addDoc(userCollectionRef, {
            name: name,
            class: className,
            roll: roll
        })

    };
    return (
        <div style={{ marginLeft: '250px' }}>
            <form noValidate autoComplete="off">
                <TextField
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <TextField
                    id="middle-name"
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="class-select-label">Class</InputLabel>
                    <Select
                        labelId="class-select-label"
                        id="class-select"
                        value={classValue}
                        onChange={handleClassChange}
                    // onChange={(event) =>{
                    //     setclassName(event.target.value)
                    // }}
                    >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="division-select-label">Division</InputLabel>
                    <Select
                        labelId="division-select-label"
                        id="division-select"
                        value={divisionValue}
                        onChange={handleDivisionChange}
                    >
                        {['A', 'B', 'C', 'D', 'E'].map((letter) => (
                            <MenuItem key={letter} value={letter}>{letter}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    id="roll-number"
                    label="Roll Number"
                    type="number"
                    inputProps={{ min: "0", max: "99", step: "1" }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleRollChange}
                />
                <TextField
                    id="address-line-1"
                    label="Address Line 1"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="address-line-1"
                    label="Address Line 2"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Landmark"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="City"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Pincode"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    inputProps={{ min: 0, max: 999999, step: 1 }}
                    onChange={handlePinCodeChange}
                />
                <Button
                    type="submit"
                    className={classes.addStudentButton}
                    onClick={handleSubmit}
                    variant="contained"
                >
                    Add Student
                </Button>
            </form>
        </div>
    );
};

export default AddStudentForm;