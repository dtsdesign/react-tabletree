import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';
import dataToCsv from './dataToCsv';

function getTableRows({ data, columns, setRowsData }, rowsData = [], parent, depth = 0) {
    depth += 1;
    data.forEach((d) => {
        if (!d.state) {
            d.state = {
                parentId: parent ? parent.id : undefined
            };
        }
        rowsData.push((
            <CSSTransition
            appear
            key={d.id}
            in={d.state.opened}
            classNames="alert"
            timeout={250}>
                <tr>
                    {columns.map((col, idx) => {
                    const hasPadding = depth > 1 && idx === 0;
                    const paddingLeft = hasPadding ? `${depth * 1.5}rem` : '';
                    return (
                        <td
                            key={col.title + idx}
                            style={{
                                width: col.width,
                                paddingLeft,
                            }}
                        >
                            { idx === 0 && d.children
                                ? (
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-xs"
                                        onClick={() => {
                                            d.state.opened = !d.state.opened;
                                            const newData = rowsData.map(rowData => rowData);
                                            setRowsData(newData);
                                        }}
                                    >
                                        {d.state.opened ? <span className="fa fa-angle-up" /> : <span className="fa fa-angle-down" />}
                                    </button>
                                ) : null
                            }
                            {col.data ? <span>{d[col.data]}</span> : null }
                        </td>
                    );
                })}
                </tr>
            </CSSTransition>
        ));
        if (d.children && d.state.opened) {
            getTableRows({ data: d.children, columns, setRowsData }, rowsData, d, depth);
        }
    });
    return rowsData;
}

function TreeTable(props) {
    const { columns, data, filename } = props;
    const setRowsData = useState([])[1];
    function intermediate(newRows) {
        console.log(newRows);
        setRowsData(newRows);
    }
    const rows = getTableRows({ data, columns, setRowsData: intermediate });
    return (
        <div>
            <button
                type="button"
                style={{ float: 'right', margin: '1rem 0' }}
                className="btn btn-primary"
                onClick={() => {
                    if (!data.length) {
                        return;
                    }
                    dataToCsv({
                        filename,
                        data,
                        columns,
                    });
                }}
            >
                Export
            </button>
            <table className="tree-table table table-bordered">
                <thead>
                    <tr>
                        {columns.map((col, idx) => <th key={col.title + idx}>{col.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <TransitionGroup component={null}>
                        {rows}
                    </TransitionGroup>
                </tbody>
            </table>
        </div>
    );
}

TreeTable.propTypes = {
    filename: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        data: PropTypes.string,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).isRequired,
};

TreeTable.defaultProps = {
    filename: 'treetable-export'
};

export default TreeTable;
