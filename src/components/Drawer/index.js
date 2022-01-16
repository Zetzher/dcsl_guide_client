import React from 'react';
import { Drawer, Button, Space, Avatar } from 'antd';

const DrawerInfo = ({ phoneInfo, visible, onClose, editPhone, deletePhone }) => {

    const { _id, model, image, description, price } = phoneInfo;

    return (
        <>
            <Drawer
                title={<><Avatar size={30} style={{ marginRight: 5 }} icon={<img alt={model} src={image} />} /> {model}</>}
                placement={'top'}
                width={'100vw'}
                onClose={onClose}
                visible={visible}
                extra={
                    <Space>
                        <Button onClick={() => editPhone(_id, model, description, price)}>Edit</Button>
                        <Button type="danger" onClick={() => deletePhone(_id)}>
                            Delete
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default DrawerInfo;
