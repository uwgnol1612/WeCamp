import React from 'react';
import '../../../app/assets/stylesheets/switch.css';

export const SwitchButton1 = ( { isOn, handleToggle } ) => {
    return (
        <div>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-1`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-1`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};

export const SwitchButton2 = ({ isOn, handleToggle }) => {
    return (
        <div>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-2`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-2`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};


export const SwitchButton3 = ({ isOn, handleToggle }) => {
    return (
        <div>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-3`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-3`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};

export const SwitchButton4 = ({ isOn, handleToggle }) => {
    return (
        <div>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-4`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-4`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};
