import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const Backdrop = (props) => {
    return <div onClick = { props.onConfirm } className='backdrop'></div>;
}
 
const ModalBackdrop = (props) => {
    return (
        <div className={`${props.addClass ? 'scrolling' : '' } modal-back`}> 
            <div>
                <header >
                    <h2> { props.title } </h2>
                </header>
                <main>
                    <div> { props.message } </div>
                </main>
                <footer>
                    <Button onClick={ props.onConfirm } className='btn-1'>Got It !</Button>
                </footer>
            </div>
        </div>
    );
}

export const InfoModal = (props) => {
    return (
      <>
        {
            ReactDOM.createPortal(
                <Backdrop onConfirm = { props.onConfirm } />,
                document.getElementById('backdrop-root') 
            )
        }
        {
            ReactDOM.createPortal(
                <ModalBackdrop 
                    title = { props.title }
                    message = { props.message }
                    onConfirm = { props.onConfirm }
                    addClass = { props.addClass } 
                />,
                document.getElementById('modal-root') 
            )
        }
     </>
    )
}