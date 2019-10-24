import React from 'react';
import './shared/shared.js';
import './index.scss';
import TreeTable from './TreeTable';
function App() {
    // useEffect(() => {
    //     // will need to fetch token once authorized to pass as header on requests to API
    //     getToken();
    // }, []);

    return (
      <div className="retailer-reports-app">
        <ul className="nav nav-tabs">
            <li role="presentation" className="active"><a href="#Chemicals">Chemicals</a></li>
            <li role="presentation" className=""><a href="#Nutrients">Nutrients</a></li>
            <li role="presentation" className=""><a href="#Seeds">Seeds</a></li>
        </ul>
          <div style={{ padding: '2rem', paddingTop: '0', border: 'solid 1px' }}>
                <TreeTable
                    columns={[
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
                    ]}
                    data={[
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
                  ]}
                />
          </div>
      </div>
    );
}

export default App;
