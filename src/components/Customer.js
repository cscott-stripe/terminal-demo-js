import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

export default function Customer(props) {
    const styles = {
        header: {
            marginBottom: 20
        },
        panel: {
            border: '1px solid silver',
            borderRadius: 4,
            padding: 15,
            marginTop: 20
        },
        clickable: {
            cursor: 'pointer',
            marginLeft: 10
        }
    }

    const updateEmail = (e) => {
        props.setCustEmail(e.target.value);
    }
    
    return (
        <div style={styles.panel}>
            <div className="row" style={styles.header}>
                <div className="col">
                    <h4>Customer Information</h4>
                </div>
            </div>
            <form>
                <div className="mb-2 row">
                    <label htmlFor="email" className="col-3 col-form-label">Email</label>
                    <div className="col-9">
                        <input type="email" className="form-control" id="email" onChange={updateEmail} value={props.custEmail} />
                    </div>
                </div>
            </form>
        </div >
    );

}

