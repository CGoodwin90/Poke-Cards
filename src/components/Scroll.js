import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bt bw3 b--navy mt4" style={{ overflowY: 'scroll', height: '82vh' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
