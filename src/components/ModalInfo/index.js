import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import color from '../../color-palette';

const ModalInfo = ({ info, theme, borderTheme, modalStatus, showModal }) => {
    const [loading, setLoading] = useState(false);

    const { description, image, manufacturer, model, price, specs, stock } = info;

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showModal(true);
        }, 1000);
    }

    const handleCancel = () => {
        showModal(false);
    }

    return (

        <>
            <Modal
                visible={modalStatus}
                bodyStyle={{ backgroundColor: theme }}
                title={model}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Button key="back" type="dashed" onClick={handleCancel} >
                            Return
                        </Button>
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk} style={{ backgroundColor: theme, color: 'black', borderColor: borderTheme }} >
                            Submit
                        </Button>
                        <Button
                            key="link"
                            href="https://google.com/"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}
                            style={{ backgroundColor: theme, color: 'black', borderColor: borderTheme }}
                        >
                            Search on Google
                        </Button>
                    </>
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default ModalInfo;

