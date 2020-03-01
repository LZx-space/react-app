import React from 'react';
import PropTypes from 'prop-types';
import { ToDefaultLocalTimeString } from '../../common-utils/dateFormatter'

Home.propTypes = {
    id: PropTypes.number.isRequired,
};

function Home(props) {
    return (
        <div>
            {ToDefaultLocalTimeString(new Date())}
        </div>
    );
}

export default Home