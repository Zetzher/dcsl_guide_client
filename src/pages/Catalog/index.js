import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from '../../components/index';
import color from '../../color-palette';
import './index.css';

const Catalog = () => {

    const { light, dark } = color;

    const [list, setList] = useState([]);
    const [webTheme, setWebTheme] = useState(light);

    const onChange = (checked) => {
        checked ? setWebTheme(light) : setWebTheme(dark);
    };

    const retrievePhones = async () => {
        try {
            const response = await axios.get('http://localhost:4000/phones');

            setList(response.data);
        } catch (err) {
            console.error(err, 'error while retrieve the phone list');
        }
    };

    useEffect(() => {
        retrievePhones();
    }, [])

    console.log(list)
    
    return (
        <>
            <section style={{ backgroundColor: webTheme, height: '100vh', width: '100vw' }}>
                <div className="switch-theme">
                    <Switch logic={onChange} trueChild="Light" falseChild="Dark" initialState={true} />
                </div>
            </section>
            <h1 className="test">hola</h1>
        </>
    );
};

export default Catalog;
