function getRows(data, columns, rowsData = []) {
    data.forEach((d) => {
        const row = [];
        columns.forEach((col) => {
            row.push(d[col.id] || d.label || '');
        });

        rowsData.push(row);
        if (d.children) {
            getRows(d.children, columns, rowsData);
        }
    });
    return rowsData;
}

export default function dataToCsv({
    data, columns, filename = `tree-table-export-${new Date().toLocaleString()}`, ignoredColumnIndexes = [],
}) {
    const rows = getRows(data, columns);
    const header = [];
    columns.forEach((c) => {
        header.push(c.title);
    });
    // remove ignored columns passed in for each row
    if (ignoredColumnIndexes.length) {
        rows.forEach((r) => {
            ignoredColumnIndexes.forEach(eif => r.splice(eif, 1));
        });
    }
    // add header row to beginning of rows array
    rows.unshift(header);
    // build up csv text
    const csv = rows.map(row => row
        .map((cell) => {
            cell = `"${cell}"`;
            return cell;
        })
        .join(','))
        .join('\r\n');
    const encodedUri = `data:text/csv;charset=utf-8,${encodeURI(csv)}`;
    // add file extension
    filename += '.csv';
    if (navigator.msSaveBlob) {
        // support stupid IE
        navigator.msSaveBlob(new Blob([csv]), filename);
    } else {
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}
