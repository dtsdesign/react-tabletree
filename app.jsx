import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './src/shared/shared.js';
import Tree, { dataToCsv } from './src/TreeTable';
const cols = [
  {
    "data": "label",
    "title": "Product"
  },
  {
    "data": "sumTotalAmount",
    "title": "Sum of Product Total Amount (gal)"
  },
  {
    "data": "sumTotalAreaApplied",
    "title": "Sum of Product Area Applied (acres)"
  },
  {
    "data": "sumTotalCost",
    "title": "Sum of Product Total Cost"
  }
];
const data = [
    {
      "id": 129,
      "label": "Endigo ZC",
      "sumTotalAmount": "33.347",
      "sumTotalAreaApplied": "133.387",
      "sumTotalCost": "$133.39",
      "children": [
        {
          "id": 376,
          "label": "Ohio",
          "sumTotalAmount": "33.347",
          "sumTotalAreaApplied": "133.387",
          "sumTotalCost": "$133.39",
          "children": [
            {
              "id": 245,
              "label": "Ohio City Branch",
              "sumTotalAmount": "33.347",
              "sumTotalAreaApplied": "133.387",
              "sumTotalCost": "$133.39",
              "children": [
                {
                  "id": 650,
                  "label": "Randy Roe",
                  "sumTotalAmount": "33.347",
                  "sumTotalAreaApplied": "133.387",
                  "sumTotalCost": "$133.39",
                  "children": [
                    {
                      "id": 356,
                      "label": "Adam Farmer",
                      "sumTotalAmount": "33.347",
                      "sumTotalAreaApplied": "133.387",
                      "sumTotalCost": "$133.39",
                      "children": [
                        {
                          "id": 228,
                          "label": "Triple R Farms S",
                          "sumTotalAmount": "33.347",
                          "sumTotalAreaApplied": "133.387",
                          "sumTotalCost": "$133.39",
                          "children": [
                            {
                              "id": 915,
                              "label": "RANK",
                              "sumTotalAmount": "33.347",
                              "sumTotalAreaApplied": "133.387",
                              "sumTotalCost": "$133.39",
                              "children": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 51,
      "label": "NIS 90:10",
      "sumTotalAmount": "1,333.870",
      "sumTotalAreaApplied": "133.387",
      "sumTotalCost": "$133.39",
      "children": [
        {
          "id": 881,
          "label": "Ohio",
          "sumTotalAmount": "1,333.870",
          "sumTotalAreaApplied": "133.387",
          "sumTotalCost": "$133.39",
          "children": [
            {
              "id": 192,
              "label": "Ohio City Branch",
              "sumTotalAmount": "1,333.870",
              "sumTotalAreaApplied": "133.387",
              "sumTotalCost": "$133.39",
              "children": [
                {
                  "id": 423,
                  "label": "Randy Roe",
                  "sumTotalAmount": "1,333.870",
                  "sumTotalAreaApplied": "133.387",
                  "sumTotalCost": "$133.39",
                  "children": [
                    {
                      "id": 604,
                      "label": "Adam Farmer",
                      "sumTotalAmount": "1,333.870",
                      "sumTotalAreaApplied": "133.387",
                      "sumTotalCost": "$133.39",
                      "children": [
                        {
                          "id": 384,
                          "label": "Triple R Farms S",
                          "sumTotalAmount": "1,333.870",
                          "sumTotalAreaApplied": "133.387",
                          "sumTotalCost": "$133.39",
                          "children": [
                            {
                              "id": 966,
                              "label": "RANK",
                              "sumTotalAmount": "1,333.870",
                              "sumTotalAreaApplied": "133.387",
                              "sumTotalCost": "$133.39",
                              "children": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 645,
      "label": "Warrior II with Zeon Technology",
      "sumTotalAmount": "33.347",
      "sumTotalAreaApplied": "133.387",
      "sumTotalCost": "$133.39",
      "children": [
        {
          "id": 62,
          "label": "Ohio",
          "sumTotalAmount": "33.347",
          "sumTotalAreaApplied": "133.387",
          "sumTotalCost": "$133.39",
          "children": [
            {
              "id": 961,
              "label": "Ohio City Branch",
              "sumTotalAmount": "33.347",
              "sumTotalAreaApplied": "133.387",
              "sumTotalCost": "$133.39",
              "children": [
                {
                  "id": 693,
                  "label": "Randy Roe",
                  "sumTotalAmount": "33.347",
                  "sumTotalAreaApplied": "133.387",
                  "sumTotalCost": "$133.39",
                  "children": [
                    {
                      "id": 401,
                      "label": "Adam Farmer",
                      "sumTotalAmount": "33.347",
                      "sumTotalAreaApplied": "133.387",
                      "sumTotalCost": "$133.39",
                      "children": [
                        {
                          "id": 591,
                          "label": "Triple R Farms S",
                          "sumTotalAmount": "33.347",
                          "sumTotalAreaApplied": "133.387",
                          "sumTotalCost": "$133.39",
                          "children": [
                            {
                              "id": 467,
                              "label": "RANK",
                              "sumTotalAmount": "33.347",
                              "sumTotalAreaApplied": "133.387",
                              "sumTotalCost": "$133.39",
                              "children": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
]
/* eslint-disable no-control-regex */
const filenameReservedRegex = () => (/[<>:"/\\|?*\x00-\x1F]/g);

function App(props) {
    const { actions, reportList, yearList, generateBtn, alertContainer } = props;
    const [treeData, setTreeData] = useState(null);
    const [year, setYear] = useState(null);
    const [selectedReport, setSelectedReport] = useState(null);
    const [productTypes, setProductTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function handleYearChange(e) {
        setYear(e.target.value);
    }

    function handleReportChange() {
        const opt = reportList.options[reportList.selectedIndex];
        const apiUrl = opt.dataset.api;
        const title = opt.innerText;
        setSelectedReport({
            title,
            apiUrl
        });
    }

    function toResultObject({ promise, item }) {
        return promise
            .then(data => ({ success: true, data, item }))
            .catch(error => ({ success: false, error, item }));
    }

    function getReportData(urlBase) {
        const url = `${urlBase}/${year}`;
        return actions.getReportData(url);
    }

    function getReportDefinition() {
        setErrorMsg('');
        setProductTypes([]);
        setTreeData(null);
        setSelectedType(null);
        if (!selectedReport || !selectedReport.apiUrl || !year) {
            setErrorMsg('Both report and year required!');
            return false;
        }
        const url = `${selectedReport.apiUrl}`;
        return actions.getReportDefinition(url)
            .then((data) => {
                const pTypes = [];
                const reqsData = [];
                data.forEach((item) => {
                    reqsData.push({
                        item,
                        promise: getReportData(item.url)
                    });
                });
                Promise.all(reqsData.map(toResultObject)).then((responses) => {
                    responses.forEach((r) => {
                        const merged = Object.assign({}, r.item, { data: r.data, error: r.error });
                        pTypes.push(merged);
                        if (r.success) {
                            if (!selectedType) {
                                setSelectedType(r.item.title);
                                setTreeData(merged);
                            }
                        }
                    });
                    setProductTypes(pTypes);
                });
            })
            .catch(() => {
                setErrorMsg('Failed to get report definition!');
            });
    }

    function handleTabClick(e) {
        e.preventDefault();
        setSelectedType(e.target.innerText);
        const item = productTypes.find(pt => pt.title === e.target.innerText);
        setTreeData(item);
    }

    useEffect(() => {
        // reportList.addEventListener('change', handleReportChange);
        // yearList.addEventListener('change', handleYearChange);
        // generateBtn.addEventListener('click', getReportDefinition);

        return () => {
            // reportList.removeEventListener('change', handleReportChange);
            // yearList.removeEventListener('change', handleYearChange);
            // generateBtn.removeEventListener('click', getReportDefinition);
        };
    }, [year, selectedReport, errorMsg]);
    return (
        <div className="retailer-reports-app">
            <ul className="nav nav-tabs">
                <li role="presentation" className=""><a>Chemicals</a></li>
                <li role="presentation" className=""><a>Nutrients</a></li>
                <li role="presentation" className="active"><a>Seeds</a></li>
            </ul>
            <div style={{ padding: '2rem', paddingTop: '0', border: 'solid 1px' }}>
                {data && cols ? (
                    <React.Fragment>
                        <button
                            style={{ margin: '1rem 0' }}
                            className="btn btn-primary"
                        >
                            Collapse All
                        </button>
                        <button
                            type="button"
                            style={{ float: 'right', margin: '1rem 0' }}
                            className="btn btn-primary"
                            onClick={() => {
                                dataToCsv({
                                    filename: 'output',
                                    data: data,
                                    columns: cols,
                                });
                            }}
                        >
                            Export
                        </button>
                        <Tree
                            columns={cols}
                            data={data}
                            // filename={`${treeData.title}-${year}-${selectedReport.title.replace(filenameReservedRegex(), '_')}`}
                        />
                    </React.Fragment>
                ) : null}
                {treeData && treeData.error ? (<h4 className="text-center">No data</h4>) : null}
            </div>
        </div>
    );
}

App.propTypes = {
    actions: PropTypes.shape({
        getReportData: PropTypes.func,
        getReportDefinition: PropTypes.func
    }).isRequired,
    reportList: PropTypes.instanceOf(Element).isRequired,
    alertContainer: PropTypes.instanceOf(Element).isRequired,
    yearList: PropTypes.instanceOf(Element).isRequired,
    generateBtn: PropTypes.instanceOf(Element).isRequired
};

export default React.memo(App);
