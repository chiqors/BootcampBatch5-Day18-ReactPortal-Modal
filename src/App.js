import React, { useState } from 'react'
import Modal from "./Modal"
import MyForm from './MyForm'

const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px"
}

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <MyForm />
                </Modal>
            </div>
            <div style={OTHER_CONTENT_STYLES}>
                <p>Some other content</p>
            </div>
        </>
    )
}