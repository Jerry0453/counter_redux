import React from 'react';
import {useSelector} from 'react-redux';

export default function Bottom() {
    const savedData = useSelector(state => state.saveReducer)

    return (
        <div>
            <h3>Saved count from storage is {savedData} </h3>
        </div>
    )
}
