import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType = {
    title: string
    callback: (newTitle: string) => void
}

const EditableSpan = (props: PropsType) => {

    const{title, callback} = props

    const [newTitle, setNewTitle] = useState(title)
    const [edit, setEdit] = useState(false)


    const toggleHandler = () => {
        setEdit(!edit)
        addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTitle.trim() !== "") {
            callback(newTitle.trim());
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            toggleHandler();
        }
    }

    return (
        edit
            ? <input  onKeyDown={onKeyPressHandler} onBlur={toggleHandler} onChange={onChangeHandler} autoFocus value={newTitle}/>
            : <span onDoubleClick={toggleHandler}>{props.title}</span>
    );
};

export default EditableSpan;


