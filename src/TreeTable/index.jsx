import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TableRow from './TableRow';
import dataToCsv from './dataToCsv';
import './index.scss';

function getTableRows({ data, columns, setRowsData }, rowsData = [], parentId, depth = 0) {
    depth += 1;
    data.forEach((d) => {
        rowsData.push((
            <CSSTransition
            mountOnEnter
            unmountOnExit
            id={parentId ? `${parentId}-${d.id}` : d.id}
            key={parentId ? `${parentId}-${d.id}` : d.id}
            in={d.opened}
            classNames="slide-row"
            timeout={250}>
                <TableRow
                    data={d}
                    columns={columns}
                    depth={depth}
                    onToggle={() => {
                        d.opened = !d.opened;
                        const newData = data.map(rowData => rowData);
                        setRowsData(newData);
                    }}
                />
            </CSSTransition>
        ));
        if (d.children && d.opened) {
            getTableRows({ data: d.children, columns, setRowsData }, rowsData, d.id, depth);
        }
    });
    return rowsData;
}

function TreeTable(props) {
    const { columns, data } = props;
    const [rowsData, setRowsData] = useState(data);
    React.useEffect(() => {
        setRowsData(data);
    }, [data]);
    const rows = getTableRows({
        data: rowsData,
        columns,
        setRowsData: () => {
            setRowsData([...rowsData]);
        } });
    return (
        <table className="tree-table table table-bordered">
            <thead>
                <tr>
                    {columns.map((col, idx) => <th key={col.title + idx}>{col.title}</th>)}
                </tr>
            </thead>
            <tbody>
                <TransitionGroup component={null}>
                    {rows && rows.length ? rows : (
                        <CSSTransition timeout={0}>
                            <tr>
                                <td style={{ textAlign: 'center' }} colSpan={columns.length}>
                                    No data
                                </td>
                            </tr>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </tbody>
        </table>
    );
}

TreeTable.propTypes = {
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

export default TreeTable;

export { dataToCsv };
