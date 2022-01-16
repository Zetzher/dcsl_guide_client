import React, { useState } from 'react';
import { Drawer, Button, Space, Avatar } from 'antd';
import './index.css';

const DrawerInfo = ({ phoneInfo, visible, onClose, editPhone, deletePhone, webTheme, webThemeComplementary, webThemeBorder }) => {

    const { _id, model, image, description, price } = phoneInfo;

    const [editStatus, setEditStatus] = useState(false);

    const [phoneDescription, setPhoneDescription] = useState('');
    const [phonePrice, setPhonePrice] = useState('');

    const editInfo = () => {
        setEditStatus(true);
    };

    const saveInfo = (id, description, price) => {

        editPhone(id, description, Number(price));
    };

    const regex = (num) => {
        if (!RegExp(/[a-zA-Z-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/).test(num)) {
            setPhonePrice(num);
        };
    }

    return (
        <Drawer
            title={<><Avatar size={30} style={{ marginRight: 5 }} icon={<img alt={model} src={image} />} /> {model}</>}
            placement={'top'}
            width={'100vw'}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ backgroundColor: webThemeComplementary }}
            extra={
                <Space>
                    {editStatus ? <Button onClick={() => saveInfo(_id, phoneDescription, phonePrice)}>Save</Button> : <Button onClick={editInfo}>Edit</Button>}
                    <Button type='danger' onClick={() => deletePhone(_id)}>
                        Delete
                        </Button>
                </Space>
            }
        >

            {!editStatus ?
                <>
                    <h3 className='phone-info-text'>{description}</h3>
                    <h3 className='phone-info-text'>Price: {price}€</h3>
                </>
                :
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <textarea className="edit-phone-input" value={phoneDescription} placeholder={description} onChange={e => setPhoneDescription(e.target.value)} />
                    <input className="edit-phone-input" value={phonePrice} placeholder={price} onChange={e => regex(e.target.value)} />
                </div>
            }
        </Drawer>
    )
}

export default DrawerInfo;
