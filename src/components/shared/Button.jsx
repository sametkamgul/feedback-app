import React, { version } from 'react';
import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
    version: 'primary',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
