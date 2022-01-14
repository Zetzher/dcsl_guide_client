import React from 'react';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

const SwitchOption = ({ logic, trueChild = 0, falseChild = 1, initialState = true }) => {
    return (
        <Switch onChange={logic} checkedChildren={trueChild} unCheckedChildren={falseChild} defaultChecked={initialState} />
    )
}

export default SwitchOption
