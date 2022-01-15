import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Alert } from 'antd';
import { Switch } from '../../components/index';
import color from '../../color-palette';
import './index.css';

const checkUserMobile = window.navigator.userAgent;

const Catalog = () => {
    const { light, dark } = color;

    const [list, setList] = useState([]);
    const [listStatus, setListStatus] = useState(true);
    const [webTheme, setWebTheme] = useState(light);

    const [feedback, setFeedback] = useState('');
    const [statusFeedback, setStatusFeedback] = useState('');
    const [dynamicFeedback, setDynamicFeedback] = useState('alert-spotted-start')

    const onChange = (checked) => {
        checked ? setWebTheme(light) : setWebTheme(dark);
    };

    const retrievePhones = async () => {
        try {
            const response = await axios.get('http://localhost:4000/phones');
            const { data } = response;

            setList(data);
            setListStatus(false);

        } catch (err) {
            console.error(err, 'error while retrieve the phone list');
        }
    };

    const purchasePhone = async (id) => {
        try {
            const response = await axios.post(`http://localhost:4000/phones/purchase/${id}`);
            const { data: { message }, status } = response;

            if (status === 200) {
                const decreaseOne = [...list].map(data => {
                    if (data.id === id) {
                        data.stock = data.stock - 1
                    }
                    return data;
                });

                setList(decreaseOne);
                setFeedback(message);
                setStatusFeedback(true);

                setTimeout(() => {
                    setDynamicFeedback('alert-spotted-end');
                }, 1000);

                setTimeout(() => {
                    setFeedback('');
                    setDynamicFeedback('alert-spotted-start');
                }, 1500);
            };


        } catch (err) {
            setStatusFeedback(false);

            const { response: { data: { message }, status } } = err;

            if (status === 404) {
                setFeedback(message);
            } else if (status === 500) {
                setFeedback(message);
            };

            setTimeout(() => {
                setDynamicFeedback('alert-spotted-end');
            }, 1000);

            setTimeout(() => {
                setFeedback('');
                setDynamicFeedback('alert-spotted-start');
            }, 1500);
        };
    };

    useEffect(() => {
        retrievePhones();
    }, [])



    return (
        <>
            <section style={{ backgroundColor: webTheme, width: '100vw' }}>

                {
                    feedback !== '' && <div className={dynamicFeedback}>
                        <Alert message={feedback} type={statusFeedback ? 'success' : 'error'} showIcon />
                    </div>
                }

                <div className="switch-theme">
                    <Switch logic={onChange} trueChild="Light" falseChild="Dark" initialState={true} />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        list.map((data, key) => {
                            const { id, image, manufacturer, model, price, stock } = data;

                            return (

                                <Card
                                    hoverable
                                    style={{ width: 240, marginTop: 50 }}
                                    cover={<img alt={model} src={image} />}
                                >
                                    <h1>{model} - {manufacturer}</h1>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <span className="price-bubble"><h3>{price} €</h3></span>
                                        <button className="button-purchase" onClick={() => purchasePhone(id)}>
                                            <h3 style={{ position: 'relative', top: 5 }}>{stock} left</h3>
                                        </button>
                                    </div>
                                </Card>
                            )
                        })

                    }
                </div>
            </section>
            <h1 className="test">hola</h1>
        </>
    );
};

export default Catalog;
