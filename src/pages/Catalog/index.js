import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Card } from 'antd';
import { Drawer } from '../../components/index';
import color from '../../color-palette';
import './index.css';

const checkUserMobile = window.navigator.userAgent;


const Catalog = ({ webTheme, webThemeComplementary, webThemeBorder }) => {

    const navigate = useNavigate();

    const { light, dark, lightComplementary, darkComplementary, lightThemeBorder, darkThemeBorder } = color;

    const [list, setList] = useState([]);

    const [phoneInfo, setPhoneInfo] = useState();

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [feedback, setFeedback] = useState('');
    const [statusFeedback, setStatusFeedback] = useState('');
    const [dynamicFeedback, setDynamicFeedback] = useState('alert-spotted-start')

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
                setPhoneInfo(data[0]);
                showDrawer();
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

    const editPhone = async (_id, description, price) => {
        try {
            const response = await axios.put(`http://localhost:4000/phones/edit/${_id}`, { description, price });

            const { data: { message }, status } = response;

            if (status === 200) {
                setFeedback(message);
                setStatusFeedback(true);

                [...list].map(data => {
                    if (data.id === _id) {
                        data.description = description
                        data.price = price
                    }
                });



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
        }


        onClose();
    };

    const deletePhone = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/phones/delete/${id}`);

            const { data: { message }, status } = response;

            if (status === 200) {
                const deleteOne = [...list].filter(data => data.id !== id);

                setList(deleteOne);
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
        }

        onClose();
    };

    useEffect(() => {
        retrievePhones();
    }, [])

    return (
        <>
            {visible && <Drawer phoneInfo={phoneInfo} visible={visible} onClose={onClose} editPhone={editPhone} deletePhone={id => deletePhone(id)} webTheme={webTheme} webThemeComplementary={webThemeComplementary} webThemeBorder={webThemeBorder} />}
            <section style={{ backgroundColor: webTheme, width: '100vw' }}>
                <span className="section-catalog-title-container">
                    <h1 style={{
                        marginLeft: 10,
                        marginRight: 10,
                        textAlign: 'center',
                        position: 'relative',
                        top: 20,
                        color: webThemeBorder
                    }}>Press a picture to watch more details about the phone</h1>
                </span>
                {
                    feedback !== '' && <div className={dynamicFeedback}>
                        <Alert message={feedback} type={statusFeedback ? 'success' : 'error'} showIcon />
                    </div>
                }

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        list.map((data, key) => {
                            const { id, image, model, price, stock, memory, camera } = data;

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
                                        marginRight: 10,
                                        marginBottom: key === list.length - 1 ? 50 : 0,
                                        zIndex: 1
                                    }}
                                    cover={<img alt={model} src={image} style={{ borderTopRightRadius: 20, width: '100%' }} onClick={() => retrievePhoneInfo(id)} />}
                                >

                                    <div data-cy="model-title" style={{ height: 80, flexDirection: 'column' }}>
                                        <h1 style={{ fontSize: 14 }}>{model}</h1>
                                        <h4 style={{ fontSize: 10 }}>{camera}</h4>
                                        <h4 style={{ fontSize: 10 }}>{memory}</h4>
                                    </div>
                                    <span className="price"><h3>{price} €</h3></span>

                                    <button data-cy="purchase-button" className="purchase-button" onClick={() => purchasePhone(id)}>
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
