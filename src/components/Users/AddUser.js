import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.length === 0 || enteredAge.length === 0) {
            // alert("check your name or age");
            setError({
                title: "invalid username input",
                message: "Please check what you input.(need non-empty values.)"
            });
            return;
        }
        // enteredAge는 초깃값이 String으로 들어갔으나, 비교 시 자동으로 Casting된다.
        // 하지만 더욱 안전을 기하기 위해 + 연산자를 앞에 사용하여 Number 타입으로의 암묵적 변환이 선행되도록 유도한다. 
        if (+enteredAge < 1) {
            // alert("age must bigger than 1");
            setError({
                title: "invalid age input",
                message: "Please check what you input.(need non-empty value, more than '0')"
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        console.log(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {/* AND 연산자를 사용하여 error가 true일 때만 뒤의 컴포넌트가 출력되도록 설정해둔다. */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {/* 이 Card 컴포넌트의 className은 Card 컴포넌트에 props로 연결된다. */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    {/* JSX에서는 label for 대신 htmlFor를 사용한다. */}
                    <label htmlFor="username" >Username</label>
                    {/* JSX에서도 id를 정해줄 수 있다. */}
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    {/* 커스텀 컴포넌트의 이름이 Button이다. props를 자연스럽게 전달한다. */}
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    );
};

export default AddUser;