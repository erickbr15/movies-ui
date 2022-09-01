import React from 'react';
import { FormikConsumer } from 'formik';
import './debug.css';

export const Debug = () => (
    <div
        className="debug-container"
    >
        <div
            className="debug-title"
        >
            Formik State
        </div>
        <FormikConsumer>
            {({ ...rest }) => (
                <pre
                    className="debug-error"
                >
                    {JSON.stringify(rest, null, 2)}
                </pre>
            )}
        </FormikConsumer>
    </div>
);