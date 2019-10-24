```javascript
import TreeTable from 'TreeTable';
<div className="p-5">
    <TreeTable
        columns={[
            {
                label: '',
                id: 'label',
            },
            {
                id: 'sumProductTotalAmt',
                label: 'Some of Product Total Amount',
            },
            {
                id: 'sumProductAreaApplied',
                label: 'Sum of Product Area Applied',
            },
            {
                id: 'sumProductTotalCost',
                label: 'Sum of Product Total Cost',
            },
        ]}
        data={[
            {
                'id': 1,
                'label': '39-0-0-3.2s', // product
                'sumProductTotalAmt': 43.11,
                'sumProductAreaApplied': 393,
                'sumProductTotalCost': 29671.5,
                'children': [
                    {
                        'id': '2c11',
                        'label': 'Central Valley Ag', // corporation?
                        'sumProductTotalAmt': 32.74,
                        'sumProductAreaApplied': 262,
                        'sumProductTotalCost': 19781,
                        'children': [ // region
                            {
                                'id': '2c21',
                                'label': 'Zone 1',
                                'sumProductTotalAmt': 32.74,
                                'sumProductAreaApplied': 262,
                                'sumProductTotalCost': 19781,
                                'children': [ // location
                                    {
                                        'id': '2c31',
                                        'label': 'Stockham',
                                        'sumProductTotalAmt': 32.74,
                                        'sumProductAreaApplied': 262,
                                        'sumProductTotalCost': 19781,
                                        'children': [ // manager
                                            {
                                                'id': '2c41',
                                                'label': 'Manager 1',
                                                'sumProductTotalAmt': 32.74,
                                                'sumProductAreaApplied': 262,
                                                'sumProductTotalCost': 19781,
                                                'children': [ // sales
                                                    {
                                                        'id': '2c51',
                                                        'label': 'Salesperson 1',
                                                        'sumProductTotalAmt': 32.74,
                                                        'sumProductAreaApplied': 262,
                                                        'sumProductTotalCost': 19781,
                                                        'children': [ // grower
                                                            {
                                                                'id': '2c61',
                                                                'label': 'Grower 1',
                                                                'sumProductTotalAmt': 32.74,
                                                                'sumProductAreaApplied': 262,
                                                                'sumProductTotalCost': 19781,
                                                                'children': [ // fields
                                                                    {
                                                                        'id': '2c71',
                                                                        'label': 'Field 1',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                    {
                                                                        'id': '2c81',
                                                                        'label': 'AB Waters',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                    {
                                                                        'id': '2c91',
                                                                        'label': 'Baynor',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                'id': 2,
                'label': 'Dual II Magnum',
                'sumProductTotalAmt': 211.86,
                'sumProductAreaApplied': 506.01,
                'sumProductTotalCost': 42378.36,
                'children': [
                    {
                        'id': '2c1',
                        'label': 'Central Valley Ag',
                        'sumProductTotalAmt': 32.74,
                        'sumProductAreaApplied': 262,
                        'sumProductTotalCost': 19781,
                        'children': [
                            {
                                'id': '2c2',
                                'label': 'Zone 1',
                                'sumProductTotalAmt': 32.74,
                                'sumProductAreaApplied': 262,
                                'sumProductTotalCost': 19781,
                                'children': [
                                    {
                                        'id': '2c3',
                                        'label': 'Stockham',
                                        'sumProductTotalAmt': 32.74,
                                        'sumProductAreaApplied': 262,
                                        'sumProductTotalCost': 19781,
                                        'children': [
                                            {
                                                'id': '2c4',
                                                'label': 'Manager 1',
                                                'sumProductTotalAmt': 32.74,
                                                'sumProductAreaApplied': 262,
                                                'sumProductTotalCost': 19781,
                                                'children': [
                                                    {
                                                        'id': '2c5',
                                                        'label': 'Salesperson 1',
                                                        'sumProductTotalAmt': 32.74,
                                                        'sumProductAreaApplied': 262,
                                                        'sumProductTotalCost': 19781,
                                                        'children': [
                                                            {
                                                                'id': '2c6',
                                                                'label': 'Grower 1',
                                                                'sumProductTotalAmt': 32.74,
                                                                'sumProductAreaApplied': 262,
                                                                'sumProductTotalCost': 19781,
                                                                'children': [
                                                                    {
                                                                        'id': '2c7',
                                                                        'label': 'Field 1',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                    {
                                                                        'id': '2c8',
                                                                        'label': 'AB Waters',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                    {
                                                                        'id': '2c9',
                                                                        'label': 'Baynor',
                                                                        'sumProductTotalAmt': 32.74,
                                                                        'sumProductAreaApplied': 262,
                                                                        'sumProductTotalCost': 19781,
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]}
    />
</div>
```