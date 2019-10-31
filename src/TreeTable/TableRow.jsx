import React from 'react';
import PropTypes from 'prop-types';

function TableRow(props) {
    const { data, columns, depth, onToggle, ...others } = props;
    const { opened } = data;
    return (
        <tr {...others}>
            {columns.map((col, idx) => {
                const hasPadding = depth > 1 && idx === 0;
                const paddingLeft = hasPadding ? `${depth * 6}px` : '';
                return (
                    <td
                        key={col.title + idx}
                        style={{
                            width: col.width,
                            paddingLeft,
                        }}
                    >
                        <div>
                            { idx === 0
                                ? (
                                    <button
                                        disabled={!data.children ? 'disabled' : ''}
                                        style={{ visibility: !data.children ? 'hidden' : 'visible' }}
                                        type="button"
                                        className="btn btn-primary btn-xs"
                                        onClick={() => {
                                            onToggle();
                                        }}
                                    >
                                        {opened ? <span className="fa fa-angle-up" /> : <span className="fa fa-angle-down" />}
                                    </button>
                                ) : null
                            }
                            {col.data ? <span>{data[col.data]}</span> : null }
                        </div>
                    </td>
                );
            })}
        </tr>);
}

TableRow.defaultProps = {
};

TableRow.propTypes = {
    onToggle: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    depth: PropTypes.number.isRequired,
};

export default TableRow;
