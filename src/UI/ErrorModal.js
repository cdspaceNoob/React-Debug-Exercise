import React from "react";
import ReactDOM from 'react-dom';

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

// Backdrop이라는 새로운 컴포넌트를 ErrorModal 컴포넌트 안에 생성한다.
// 이 앱에서 Backdrop 컴포넌트는 오직 ErrorModal 컴포넌트와 사용할 것이기 때문이다. 
const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} />
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    );
};

export default ErrorModal;