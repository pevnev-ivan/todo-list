import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";

type PropsType = {
    callback: (title: string) => void
}

const AddItemForm = (props: PropsType) => {
    const {callback} = props
    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const addTask = () => {
        if (title.trim() !== "") {
            callback(title.trim());
            setTitle("");
        } else {
            setError(true);
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div>
            <div>
                <TextField
                    id="outlined-basic" variant="outlined" size='small'
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    error={error}
                    label={error ? 'Title is required' : ''}
                />

                <Button style={addButtonStyle} size="small" variant="contained" onClick={addTask}>+</Button>

                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

export default AddItemForm;

const addButtonStyle = {
    maxWidth: '40px',
    maxHeight: '40px',
    minWidth: '40px',
    minHeight: '40px',
}

