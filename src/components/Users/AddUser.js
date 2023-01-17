import React from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        // 이 Card 컴포넌트의 className은 Card 컴포넌트에 props로 연결된다. 
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                {/* JSX에서는 label for 대신 htmlFor를 사용한다. */}
                <label htmlFor="username">Username</label>
                {/* JSX에서도 id를 정해줄 수 있다. */}
                <input id="username" type='text' />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" />
                {/* 커스텀 컴포넌트의 이름이 Button이다. props를 자연스럽게 전달한다. */}
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;