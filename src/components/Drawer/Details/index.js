import React, { useState } from 'react';
import { Drawer, Button, Space, Avatar } from 'antd';
import './index.css';

const DrawerDetails = ({ phoneInfo, visible, onClose, editPhone, deletePhone, webTheme, webThemeComplementary, webThemeBorder }) => {

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
    };

    return (
        <Drawer
            title={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar size={30} style={{ marginRight: 5 }} icon={<img alt={model} src={image} />} /> {model}</div>}
            placement={'top'}
            width={'100vw'}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ backgroundColor: webThemeComplementary }}
            extra={
                <div style={{ left: 10 }}>
                    {editStatus ? <Button data-cy='save-info-phone' onClick={() => saveInfo(_id, phoneDescription, phonePrice)}>Save</Button> : <Button data-cy='edit-phone' onClick={editInfo}>Edit</Button>}
                    <Button data-cy='delete-phone' style={{ backgroundColor: webThemeComplementary, bordercolor: webThemeBorder, left: 10 }} onClick={() => deletePhone(_id)}>
                        Delete
                    </Button>
                </div>
            }
        >

            {!editStatus ?
                <>
                    <h3 className='phone-info-text'>{description}</h3>
                    <h3 className='phone-info-text'>Price: {price}€</h3>
                </>
                :
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <textarea data-cy='input-description' className="edit-phone-input" style={{ borderColor: webThemeBorder }} value={phoneDescription} placeholder={description} onChange={e => setPhoneDescription(e.target.value)} />
                    <input data-cy='input-price' className="edit-phone-input" style={{ borderColor: webThemeBorder }} value={phonePrice} placeholder={price} onChange={e => regex(e.target.value)} />
                </div>
            }
        </Drawer>
    )
}

export default DrawerDetails;
