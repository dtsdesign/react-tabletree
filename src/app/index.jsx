import React from 'react';
import '../custom_bootstrap';
import './index.scss';
import TreeTable from './TreeTable';

function AdminAppView() {
    // useEffect(() => {
    //     // will need to fetch token once authorized to pass as header on requests to API
    //     getToken();
    // }, []);

    return (
        <>
  <TreeTable />
        </>
    );
}

export default AdminAppView;
