import React from "react";

import classes from "./UsersList.module.css";
import Card from "../../UI/Card";

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {/* UsersList는 App으로부터 users라는 배열을 받게 될 것이다. */}
                {props.users.map((user) => {
                    <li>{user.name} ({user.age} years old.)</li>
                })}
            </ul>
        </Card>
    );
};

export default UsersList;