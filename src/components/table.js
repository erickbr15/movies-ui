import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './table.less';

class Table extends React.Component {
    /**
     * Property types for the current component.
     */
    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                className: PropTypes.string,
                title: PropTypes.string,
                width: PropTypes.number
            })).isRequired
    }

    /**
     * Render a th element for each column specified in props.
     * @param {Object} column the column to map.
     * @returns {JSX.Element} a th element.
     */
    renderHeader(column) {
        const otherClassNames = column.className && column.className.split(' ');

        const className = classNames({
            'table-column-header': true,
            'ese-required': column.required && Boolean(column.required) === true
        }, otherClassNames);

        return <th key={column.title} className={className}>{column.title}</th>;
    }

    /**
     * Render a col element for each column specified in props.
     * @param {Object} column the column to map.
     * @returns {JSX.Element} a col element.
     */
    renderColumn(column) {
        return <col key={column.title} width={typeof column.width === 'number' ? column.width : '*'} />;
    }

    /**
     * Render the component whenever a property change occurs.
     * @returns {JSX.Element} a formatted table.
     */
    render() {                
        return (
            <div className='table-container'>
                <div className="table-header-container">
                    <table className="table-header">
                        <colgroup>
                            {this.props.columns.map(this.renderColumn)}
                        </colgroup>
                        <thead>
                            <tr>
                                {this.props.columns.map(this.renderHeader)}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-body-container">
                    <table className="table-body">
                        <colgroup>
                            {this.props.columns.map(this.renderColumn)}
                        </colgroup>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;
