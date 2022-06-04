import React, { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import './index.css';

function Index(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='link' variant="link" onClick={handleShow}>
            {props.props.Name}
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.props.Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush" >
                    {Object.keys(props.props).filter(title => title !== "Name").map((desc, descKey) => {
                        return(
                            <ListGroup.Item key={descKey}>
                                <strong>{desc}: </strong>
                                {props.props[desc]}
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}
export default Index;