import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Card } from 'antd';
import { ModalInfo, Switch } from '../../components/index';
import color from '../../color-palette';
import './index.css';

const checkUserMobile = window.navigator.userAgent;

const Catalog = () => {
    const { light, dark, lightComplementary, darkComplementary, lightThemeBorder, darkThemeBorder } = color;

    const [list, setList] = useState([]);

    const [phoneInfo, setPhoneInfo] = useState();

    const [visible, setVisible] = useState(false);

    const [webTheme, setWebTheme] = useState(light);
    const [webThemeComplementary, setWebThemeComplementary] = useState(lightComplementary);
    const [webThemeBorder, setWebThemeBorder] = useState(lightThemeBorder);

    const [feedback, setFeedback] = useState('');
    const [statusFeedback, setStatusFeedback] = useState('');
    const [dynamicFeedback, setDynamicFeedback] = useState('alert-spotted-start')

    const onChange = (checked) => {
        if (checked) {
            setWebTheme(light);
            setWebThemeComplementary(lightComplementary);
            setWebThemeBorder(lightThemeBorder)
        } else {
            setWebTheme(dark);
            setWebThemeComplementary(darkComplementary);
            setWebThemeBorder(darkThemeBorder);
        }
    };

    const retrievePhones = async () => {
        try {
            const response = await axios.get('http://localhost:4000/phones');
            const { data } = response;

            setList(data);

        } catch (err) {
            console.error(err, 'error while retrieve the phone list');
        }
    };

    const retrievePhoneInfo = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/phones/info/${id}`);

            const { data, status } = response;

            if (status === 200) {
                setVisible(true);
                setPhoneInfo(...data);
            };

        } catch (err) {
            const { status, data: { message } } = err.response;

            if (status === 500) {
                setFeedback(message);
            };

            setTimeout(() => {
                setDynamicFeedback('alert-spotted-end');
            }, 2000);

            setTimeout(() => {
                setFeedback('');
                setDynamicFeedback('alert-spotted-start');
            }, 2500);
        }
    }

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
                }, 2000);

                setTimeout(() => {
                    setFeedback('');
                    setDynamicFeedback('alert-spotted-start');
                }, 2500);
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
            }, 2000);

            setTimeout(() => {
                setFeedback('');
                setDynamicFeedback('alert-spotted-start');
            }, 2500);
        };
    };


    useEffect(() => {
        retrievePhones();
    }, [])



    return (
        <>
            <div style={{ position: 'absolute' }}>
                {visible && <ModalInfo info={phoneInfo} theme={webThemeComplementary} borderTheme={webThemeBorder} modalStatus={visible} showModal={setVisible} />}
            </div>
            <section style={{ backgroundColor: webTheme, width: '100vw' }}>
                <span className="section-catalog-title-container">
                    <h1 className="section-catalog-title">Press a picture to watch more details about the phone</h1>
                </span>
                {
                    feedback !== '' && <div className={dynamicFeedback}>
                        <Alert message={feedback} type={statusFeedback ? 'success' : 'error'} showIcon />
                    </div>
                }

                <div className="switch-theme">
                    <Switch logic={onChange} trueChild="Light Theme" falseChild="Dark Theme" initialState={true} />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        list.map((data, key) => {
                            const { id, image, manufacturer, model, price, stock } = data;

                            return (

                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                        marginTop: 50,
                                        backgroundColor: webThemeComplementary,
                                        borderColor: webThemeBorder, borderWidth: 3,
                                        borderTopRightRadius: 20,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        marginLeft: 10,
                                        marginRight: 10
                                    }}
                                    cover={<img alt={model} src={image} style={{ borderTopRightRadius: 20 }} onClick={() => retrievePhoneInfo(id)} />}
                                >
                                    <h1>{model} - {manufacturer}</h1>
                                    <span className="price-bubble"><h3>{price} €</h3></span>

                                    <button className="button-purchase" onClick={() => purchasePhone(id)}>
                                        <h3 style={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}>Press here to buy now, there are only {stock} left</h3>
                                    </button>
                                </Card>

                            )
                        })

                    }
                </div>
            </section>
        </>
    );
};

export default Catalog;
