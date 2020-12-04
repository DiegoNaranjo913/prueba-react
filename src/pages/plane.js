import React from 'react';
import Title from '../components/title'
import Form from '../components/form'
import Loader from '../components/loader'

export default function Plane() {
    return (
        <div>
            <Loader />
            <Title />
            <Form />
        </div>
    );
}