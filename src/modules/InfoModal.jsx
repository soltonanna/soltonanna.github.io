import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div onClick = { props.onConfirm } className='backdrop'></div>;
}
 
const ModalBackdrop = (props) => {
    return (
        <div className='modal-back'> 
            <div>
                <header >
                    <h2> {  props.title } </h2>
                </header>
                <main>
                    <p> { props.message } </p>
                </main>
                <footer>
                    <button onClick = { props.onConfirm }>Ok</button>
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
                onConfirm = { props.onConfirm } />,
                document.getElementById('modal-root') 
            )
        }
     </>
    )
}