import React, { useState, useEffect } from 'react';
import { Drawer, Button, Space } from 'antd';

const DrawerAdd = ({ visible, onClose, action, webTheme, webThemeComplementary, webThemeBorder }) => {

  const [status, setStatus] = useState(false);

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

  useEffect(() => {
    String(phonePrice).length > 0 ? setStatus(true) : setStatus(false);
  }, [phonePrice])

  return (
    <Drawer
      title="Add your new phone"
      placement={'right'}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ backgroundColor: webThemeComplementary }}
      extra={
        <Space>
          <Button data-cy='add-new-phone' style={{ opacity: !status ? 0.3 : 1 }} onClick={() => action({ model: phoneModel, manufacturer: phoneManufacturer, description: phoneDescription, main: phoneMain, selfie: phoneSelfie, features: phoneFeatures, body: phoneBody, memory: phoneMemory, chipset: phoneChipset, display: phoneDisplay, platform: phonePlatform, price: phonePrice })}>
            Save
          </Button>
        </Space>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <input data-cy='input-model' className="edit-phone-input" placeholder={'Model'} style={{ borderColor: webThemeBorder }} value={phoneModel} onChange={e => setPhoneModel(e.target.value)} />
        <input data-cy='input-manufacturer' className="edit-phone-input" placeholder={'Manufacturer'} style={{ borderColor: webThemeBorder }} value={phoneManufacturer} onChange={e => setPhoneManufacturer(e.target.value)} />
        <textarea data-cy='input-description' className="edit-phone-input" placeholder={'Description'} style={{ borderColor: webThemeBorder }} value={phoneDescription} onChange={e => setPhoneDescription(e.target.value)} />
        <input data-cy='input-main-camera' className="edit-phone-input" placeholder={'Main Camera'} style={{ borderColor: webThemeBorder }} value={phoneMain} onChange={e => setPhoneMain(e.target.value)} />
        <input data-cy='input-selfie-camera' className="edit-phone-input" placeholder={'Selfie Camera'} style={{ borderColor: webThemeBorder }} value={phoneSelfie} onChange={e => setPhoneSelfie(e.target.value)} />
        <input data-cy='input-features-camera' className="edit-phone-input" placeholder={'Features Camera'} style={{ borderColor: webThemeBorder }} value={phoneFeatures} onChange={e => setPhoneFeatures(e.target.value)} />
        <input data-cy='input-body' className="edit-phone-input" placeholder={'Body'} style={{ borderColor: webThemeBorder }} value={phoneBody} onChange={e => setPhoneBody(e.target.value)} />
        <input data-cy='input-memory' className="edit-phone-input" placeholder={'Memory'} style={{ borderColor: webThemeBorder }} value={phoneMemory} onChange={e => setPhoneMemory(e.target.value)} />
        <input data-cy='input-chipset' className="edit-phone-input" placeholder={'Chipset'} style={{ borderColor: webThemeBorder }} value={phoneChipset} onChange={e => setPhoneChipset(e.target.value)} />
        <input data-cy='input-display' className="edit-phone-input" placeholder={'Display'} style={{ borderColor: webThemeBorder }} value={phoneDisplay} onChange={e => setPhoneDisplay(e.target.value)} />
        <input data-cy='input-platform' className="edit-phone-input" placeholder={'Platform'} style={{ borderColor: webThemeBorder }} value={phonePlatform} onChange={e => setPhonePlatform(e.target.value)} />
        <input data-cy='input-price' className="edit-phone-input" placeholder={'Price (Mandatory)'} style={{ borderColor: webThemeBorder }} value={phonePrice} onChange={e => regex(e.target.value)} />

      </div>
    </Drawer>
  );
};

export default DrawerAdd;