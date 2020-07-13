import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToDefaultLocalTimeString } from '../../common-utils/dateFormatter'
import $ from 'jquery'

Home.propTypes = {
    id: PropTypes.number.isRequired,
};

function Home(props) {
    var ref = useRef()

    useEffect(() => {
       
    })

    return (
        <div>
            -----------------------------<br></br>
            {ToDefaultLocalTimeString(new Date())}<br />
            <input id='i' className='ttt'></input>
            <script type='text/javascript' id="input">
                {   
                   $('#i').val(11234)
                   
                }
                {
                     document.write($('#i').val())
                }
            </script>
        </div>
    );
}

export default Home