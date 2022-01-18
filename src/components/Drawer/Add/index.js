import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import { RadioChangeEvent } from 'antd/es/radio';

const DrawerAdd = ({ visible, onClose, action, webTheme, webThemeComplementary, webThemeBorder }) => {

  const [status, newStatus] = useState(false);

  const [phoneMain, setPhoneMain] = useState('');
  const [phoneSelfie, setPhoneSelfie] = useState('');
  const [phoneFeatures, setPhoneFeatures] = useState('');
  const [phoneBody, setPhoneBody] = useState('');
  const [phoneMemory, setPhoneMemory] = useState('');
  const [phoneChipset, setPhoneChipset] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [phonePlatform, setPhonePlatform] = useState('');
  const [phoneManufacturer, setPhoneManufacturer] = useState('');
  const [phoneModel, setPhoneModel] = useState('');
  const [phoneDescription, setPhoneDescription] = useState('');
  const [phonePrice, setPhonePrice] = useState('');

  const regex = (num) => {
    if (!RegExp(/[a-zA-Z-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/).test(num)) {
      setPhonePrice(num);
    };
  };

  return (
    <Drawer
      title="Add your new phone"
      placement={'right'}
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
          <Button style={{ opacity: !status ? 0.3 : 1 }} type="primary" onClick={onClose}>
            Save
          </Button>
        </Space>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <input data-cy='input-model' className="edit-phone-input" placerHoler={'Model'} style={{ borderColor: webThemeBorder }} value={phoneModel} onChange={e => regex(e.target.value)} />
        <input data-cy='input-manufacturer' className="edit-phone-input" placerHoler={'Manufacturer'} style={{ borderColor: webThemeBorder }} value={phoneManufacturer} onChange={e => regex(e.target.value)} />
        <textarea data-cy='input-description' className="edit-phone-input" placerHoler={'Description'} style={{ borderColor: webThemeBorder }} value={phoneDescription} onChange={e => setPhoneDescription(e.target.value)} />
        <input data-cy='input-main-camera' className="edit-phone-input" placerHoler={'Main Camera'} style={{ borderColor: webThemeBorder }} value={phoneMain} onChange={e => regex(e.target.value)} />
        <input data-cy='input-selfie-camera' className="edit-phone-input" placerHoler={'Selfie Camera'} style={{ borderColor: webThemeBorder }} value={phoneSelfie} onChange={e => regex(e.target.value)} />
        <input data-cy='input-features-camera' className="edit-phone-input" placerHoler={'Features Camera'} style={{ borderColor: webThemeBorder }} value={phoneFeatures} onChange={e => regex(e.target.value)} />
        <input data-cy='input-body' className="edit-phone-input" placerHoler={'Body'} style={{ borderColor: webThemeBorder }} value={phoneBody} onChange={e => regex(e.target.value)} />
        <input data-cy='input-memory' className="edit-phone-input" placerHoler={'Memory'} style={{ borderColor: webThemeBorder }} value={phoneMemory} onChange={e => regex(e.target.value)} />
        <input data-cy='input-chipset' className="edit-phone-input" placerHoler={'Chipset'} style={{ borderColor: webThemeBorder }} value={phoneChipset} onChange={e => regex(e.target.value)} />
        <input data-cy='input-display' className="edit-phone-input" placerHoler={'Display'} style={{ borderColor: webThemeBorder }} value={phoneDisplay} onChange={e => regex(e.target.value)} />
        <input data-cy='input-platform' className="edit-phone-input" placerHoler={'Platform'} style={{ borderColor: webThemeBorder }} value={phonePlatform} onChange={e => regex(e.target.value)} />
        <input data-cy='input-price' className="edit-phone-input" placerHoler={'Price'} style={{ borderColor: webThemeBorder }} value={phonePrice} onChange={e => regex(e.target.value)} />

      </div>
    </Drawer>
  );
};

export default DrawerAdd;