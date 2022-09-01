import React from 'react';
import { Formik } from 'formik';
import ConfigSearchForm from './config-search-form';

const ConfigSearch = ({
    handleSubmit
}) => (
  <Formik
    initialValues={{
        filterByName: "",
        orderBy: "2",
        orderDirection: "1",
        pageNumber: "0",
        pageSize: "3"
    }}
    onSubmit={(values, actions) => {
        handleSubmit(values, actions);      
    }}
  >
    {props => <ConfigSearchForm {...props} />}
  </Formik>
);

export default ConfigSearch;