import React from 'react';
import InputField from './common/input-field';

const ConfigSearchForm = ({
  handleChange,
  handleSubmit,
  isSubmitting,
  values  
}) => (
  <form onSubmit={handleSubmit}>
    <div className="colums">
    <div className="column is-full">
        <InputField name="filterByName" type="text" label="Filter by movie name:" />
    </div>
    <div className="column is-full">
        <div className="field">
          <label className="label">Order by</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="orderBy"
                name="orderBy"                
                onChange={handleChange}
                value={values.orderBy}>
                    <option key="1" value="1" label="Movie ID" />
                    <option key="2" value="2" label="Movie name" />
                    <option key="3" value="3" label="Release date" />
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-full">
        <div className="field">
          <label className="label">Order direction</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="orderDirection"
                name="orderDirection"                
                onChange={handleChange}
                value={values.orderDirection}>
                    <option key="1" value="1" label="Ascending" />
                    <option key="2" value="2" label="Descending" />
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-full">
        <div className="field">
          <label className="label">Page number</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="pageNumber"
                name="pageNumber"                
                onChange={handleChange}
                value={values.pageNumber}>
                    <option key="0" value="0" label="01" />
                    <option key="1" value="1" label="02" />
                    <option key="2" value="2" label="03" />
                    <option key="3" value="3" label="04" />
                    <option key="4" value="4" label="05" />
                    <option key="5" value="5" label="06" />
                    <option key="6" value="6" label="07" />                    
                    <option key="7" value="7" label="08" />
                    <option key="8" value="8" label="09" />
                    <option key="9" value="9" label="10" />
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-full">
        <div className="field">
          <label className="label">Page size</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="pageSize"
                name="pageSize"                
                onChange={handleChange}
                value={values.pageSize}>
                    <option key="1" value="1" label="1" />
                    <option key="2" value="2" label="2" />
                    <option key="3" value="3" label="3" />
                    <option key="4" value="4" label="4" />
                    <option key="5" value="5" label="5" />
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="is-full">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-rounded is-primary" disabled={isSubmitting} type="submit">
                Search
            </button>
          </p>          
        </div>
      </div>
    </div>
  </form>
);

export default ConfigSearchForm;