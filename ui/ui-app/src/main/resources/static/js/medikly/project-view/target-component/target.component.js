var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../shared/data/documents"], function (require, exports, core_1, documents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TargetComponent = (function () {
        function TargetComponent() {
            this.filters = [];
            this.documents = [];
            this.num = 1;
            this.getMainContent();
            this.filtersTabProviders = [
                {
                    name: 'Saved Filters',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Custom Audiences',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Saved Segments',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Exclude saved leads',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Exclude viewed leads',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Search within my accounts',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Keyword',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Text Field',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Demographics',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Profession',
                            value: '',
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Specialty',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Sub-Specialty',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Credential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Medical School',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Years of Experience',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Geography',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'State',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'City',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Zip Code',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'County',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Geographical Area',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Affiliations',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Hospital Affiliations',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Provider Affiliations',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Network Affiliations',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Authorized Official',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Title',
                            value: '',
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Credential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Role/Function',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Organizations',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Organization Type',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Organization Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Profession Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Specialty Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Technologies Used',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Group Practice',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Practice Type',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Profession Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Specialty Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Practice Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Location Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Lifestyle',
                    value: '',
                    open: false,
                    children: []
                },
                {
                    name: 'Quality Measures',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Participates in HER',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Medicare Assignment',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'PQRS',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Million Hearts',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Tags',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Default Material',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Prescriptions',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Prescriber Potential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescriber Potential',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Prescription Potential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescription Potential',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Prescription Potential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescription Potential',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Brand Name Prescribed',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Generic Name Prescribed',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Avg. Rx Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Avg. Rx Count',
                                    options: [
                                        { name: 'Very Below Avg', value: '' },
                                        { name: 'Below Avg', value: '' },
                                        { name: 'Avg', value: '' },
                                        { name: 'Above Avg', value: '' },
                                        { name: 'Very Above Avg', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Total Rx Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Total Rx Count',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Therapeutic Class Prescribed',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Prescriber Decile',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescriber Decile',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Prescription Rate',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescription Rate',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Prescription Rank',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Prescription Rank',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Brand Prescription Rank',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Brand Prescription Rank',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Patient Avg. Age + gender percentage',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Conditions Treated',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Procedures',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Providing Procedure Potential',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Providing Procedure Potential',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Avg. Procedure Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Avg. Procedure Count',
                                    options: [
                                        { name: 'Very Below Avg', value: '' },
                                        { name: 'Below Avg', value: '' },
                                        { name: 'Avg', value: '' },
                                        { name: 'Above Avg', value: '' },
                                        { name: 'Very Above Avg', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Procedure Name',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'All Procedure Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'All Procedure Count',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Procedure Category',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Procedure Category Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'All Procedure Count',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Procedure Rate',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'All Procedure Count',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Procedure Rank',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'All Procedure Count',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Conditions',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Referrals',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Inbound Referral Rank',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Inbound Referral Rank',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Total Inbound Visits',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Inbound Specialty Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    type: 'slider',
                                }
                            ]
                        },
                        {
                            name: 'Inbound Provider Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    type: 'slider',
                                }
                            ]
                        },
                        {
                            name: 'Outbound Referral Rank',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Outbound Referral Rank',
                                    options: [
                                        { name: 'Very low', value: '' },
                                        { name: 'Low', value: '' },
                                        { name: 'Medium', value: '' },
                                        { name: 'High', value: '' },
                                        { name: 'Very High', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        },
                        {
                            name: 'Total Outbound Visits',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Outbound Specialty Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    type: 'slider',
                                }
                            ]
                        },
                        {
                            name: 'Outbound Provider Count',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    type: 'slider',
                                }
                            ]
                        },
                        {
                            name: 'Referral Rate',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    name: 'Avg. Procedure Count',
                                    options: [
                                        { name: 'Very Below Avg', value: '' },
                                        { name: 'Below Avg', value: '' },
                                        { name: 'Avg', value: '' },
                                        { name: 'Above Avg', value: '' },
                                        { name: 'Very Above Avg', value: '' }
                                    ],
                                    type: 'dropdown',
                                }
                            ]
                        }
                    ]
                }
            ];
            this.filtersTabOrganizations = [
                {
                    name: 'Saved Filters',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Custom Audiences',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Segments',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Exclude saved organizations',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Geography',
                    value: '',
                    open: false,
                    children: []
                },
                {
                    name: 'Organization',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Organization Type',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Organization Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Profession Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Specialty Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Technologies Used',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Hospitals',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Emergency Services',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Hospital Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Profession Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Specialty Headcount',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Hospital Type',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Hospital Ownership Type',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Procedures Volume',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Progress',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    type: 'slider',
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Procedures Type',
                    value: '',
                    open: false,
                    children: [
                        {
                            name: 'Evaluation and Management',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Medical',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Surgical',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Radiology',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Anesthesiology',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        },
                        {
                            name: 'Labs',
                            value: '',
                            open: false,
                            filters: [
                                {
                                    list: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
                                    type: 'chip',
                                    selecteds: []
                                }
                            ]
                        }
                    ]
                }
            ];
        }
        TargetComponent.prototype.ngOnInit = function () {
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            // this.ts.setBackRoute('');
        };
        TargetComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            // this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        TargetComponent.prototype.ngAfterViewInit = function () {
            this.tabActive();
        };
        TargetComponent.prototype.fetchDocuments = function () {
            return Promise.resolve(documents_1.DOCUMENTS);
        };
        TargetComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        TargetComponent.prototype.getMainContent = function () {
            this.mainContentTabs = [
                {
                    name: 'DEMOGRAPHICS',
                    value: '',
                    children: [
                        {
                            title: 'Age and Gender',
                            subtitle: 'Self-reported provider information from CMS Physician Compare and Medicare Provider Utilization and Payment Data: Physician and Other Supplier.',
                            open: true,
                            icon: '',
                            type: 'vertical-inverted',
                            data: {
                                name1: 'Female',
                                name2: 'Male',
                                categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                                data1: [17, 24, 18.6, 16.3, 13.4, 10.7],
                                data2: [15, 27.9, 20.4, 16.2, 12, 8.6],
                                data3: [19.3, 27.9, 19.4, 15.2, 10.3, 7.8],
                                data4: [16, 30.4, 21.1, 15.3, 9.9, 6.7],
                                matched: '14'
                            }
                        }, {
                            title: 'Graduation Year',
                            subtitle: 'Provider’s medical school graduation year.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['80-90', '90-00', '00-10', '70-80', '<70', '2010-2017'],
                                data1: [80, 90, 10, 70, 66, 34],
                                data2: [43, 30, 45, 20, 16, 50],
                            }
                        },
                        {
                            title: 'Household Size',
                            subtitle: 'Number of adults and children who live in a single US home, based on survey responses, purchase activity and publicly available data. Source: Acxiom.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['0-1', '2-3', '4-5', '6-7', '> 8'],
                                data1: [44, 11, 65, 23, 61],
                                data2: [49, 30, 45, 50, 26],
                            }
                        },
                        {
                            title: 'Household Income',
                            subtitle: 'Estimated income for US households based on survey responses and estimates using demographic data.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['$30-$40', '$40-$50', '$50-$75', '$75-$100', '$100-$120', '$125-$150', '$150-$250', '$250-$350', '$350-$500', '>$500'],
                                data1: [44, 11, 65, 23, 61, 44, 11, 65, 23, 61],
                                data2: [49, 30, 45, 50, 26, 49, 30, 45, 50, 26],
                            }
                        },
                        {
                            title: 'Home Market Value',
                            subtitle: 'Estimated US home value based on survey responses and publicly available data. Source: Acxiom.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['<$100', '$100-$200', '$200-$500', '$500-$700', '$700-$1,000', '>$1,000'],
                                data1: [12, 62, 20, 19, 53, 31, 88],
                                data2: [62, 16, 67, 22, 74, 61, 48],
                            }
                        },
                        {
                            title: 'Home Ownership',
                            subtitle: 'US home ownership based on survey responses and publicly available data. Source: Acxiom.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ["Renter", "Owner"],
                                data1: [35, 26],
                                data2: [20, 42],
                            }
                        },
                        {
                            title: 'Top Provider Specialties',
                            subtitle: 'Primary medical specialty reported by the individual professional in this PECOS enrollment record.',
                            open: true,
                            icon: '',
                            type: 'horizontal',
                            data: {
                                categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'],
                                data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                matched: '64'
                            }
                        },
                        {
                            title: 'Top Medical Groups',
                            subtitle: 'Providers reported that they either operates as a either a multi-specialty group or single-specialty group.',
                            open: true,
                            icon: '',
                            type: 'horizontal',
                            data: {
                                categories: ['Upstate Oncology Associates', 'UHC Oncology', 'East Bay  Medical Oncology Associates', 'UT Southwestern Medical Center', 'MD Anderson Cooper Cancer Center', 'Montefiore Medical Center', 'Northwestern Medical Group', 'University Hospitals Medical Group', 'Illinois CancerCare, PC', 'Tennessee Oncology PC', 'Oncology Hematology Association, Inc'],
                                data1: [50, 44, 10, 70, 66, 51, 34, 80, 10, 19, 70],
                                data2: [23, 12, 65, 12, 58, 20, 71, 28, 29, 52, 40],
                                matched: '14'
                            }
                        },
                        {
                            title: 'Top Group Practices',
                            subtitle: 'Providers reported that they either operates as a either a multi-specialty group or single-specialty group.',
                            open: true,
                            icon: '',
                            type: 'horizontal',
                            data: {
                                categories: ['Atlantic Medical Group, LLC', 'Suburban Hospital, Inc', 'TACOMA RADIATION CENTER INC', 'SSM REGIONAL HEALTH SERVICES', 'Alfred Distefano', 'East Bay  Medical Oncology Associates', 'MSMC Oncology, LLC', 'New Jersey Oncology, LLC', 'West Clinic, LLC', 'Northwestern Medical Group', 'Oncology Specialties, LLC'],
                                data1: [23, 12, 65, 12, 58, 20, 71, 28, 29, 52, 40],
                                data2: [50, 44, 10, 70, 66, 51, 34, 80, 10, 19, 70],
                                matched: '14'
                            }
                        },
                        {
                            title: 'Affinity',
                            subtitle: 'Affinity Subtitle.',
                            open: true,
                            icon: '',
                            type: 'horizontal',
                            data: {
                                categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'],
                                data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                matched: '40'
                            }
                        },
                        {
                            title: 'Top Subspecialties',
                            subtitle: 'Secondary specialties reported by the individual providers  in this PECOS enrollment record, separated by commas.',
                            open: true,
                            icon: '',
                            type: 'tab',
                            data: [
                                {
                                    name: 'TOP STATES',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    matched: '40'
                                },
                                {
                                    name: 'TOP CITIES',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    data2: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    matched: '40'
                                },
                                {
                                    name: 'TOP COUNTIES',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    matched: '40'
                                }
                            ]
                        },
                        {
                            title: 'Participates in Quality Reporting',
                            subtitle: 'Provider participates in the Medicare Physician Quality Reporting System (PQRS) Incentive Program.',
                            open: true,
                            icon: '',
                            type: 'vertical-inverted',
                            data: {
                                name1: 'Yes',
                                name2: 'No',
                                categories: ['Accept Medicare Assignment', 'EHR', 'eRx', 'EHR'],
                                data1: [17, 24, 18.6, 16.3],
                                data2: [15, 27.9, 20.4, 16.2],
                                data3: [19.3, 27.9, 19.4, 15.2],
                                data4: [16, 30.4, 21.1, 15.3],
                                matched: '14'
                            }
                        }
                    ]
                },
                {
                    name: 'GEOGRAPHY',
                    value: '',
                    children: [
                        {
                            title: 'Where They Reside',
                            subtitle: 'Map Subtitle.',
                            open: true,
                            icon: '',
                            type: 'map',
                            data: {}
                        },
                        {
                            title: 'Where Providers Reside',
                            subtitle: 'Top 10 geographical locations of providers, by city, state, MSA, Rural and Urban areas.',
                            open: true,
                            icon: '',
                            type: 'tab',
                            data: [
                                {
                                    name: 'BY CITY',
                                    type: 'horizontal',
                                    categories: ['Boston, Massachusetts', 'Baltimore, Maryland', 'New York City, New York', 'Rochester, Minnesota', 'Cleveland, Ohio', 'Houston, Texas', 'Los Angeles, California', 'Chicago, Illinois',],
                                    data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    matched: '40'
                                },
                                {
                                    name: 'BY STATE',
                                    type: 'horizontal',
                                    categories: ['California', 'Maryland', 'Pennsylvania', 'New York', 'New Jersey', 'North Carolina', 'Missouri', 'Texas', 'Illinois', 'Michigan'],
                                    data1: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    data2: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    matched: '40'
                                },
                                {
                                    name: 'BY MSA',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    matched: '40'
                                },
                                {
                                    name: 'BY RURAL',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    data2: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    matched: '40'
                                },
                                {
                                    name: 'BY URBAN',
                                    type: 'horizontal',
                                    categories: ['Gynecologic Oncology', 'Hematology & Oncology', 'Medical Oncology', 'Oncology', 'Oncology, Pediatrics', 'Oncology, Radiology', 'Pediatric Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pharm., Oncology'],
                                    data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                    data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                    matched: '40'
                                }
                            ]
                        },
                        {
                            title: 'Wealth Indicators',
                            subtitle: "Numerical indicator of the relative wealth/poverty of the provider's immediate service area (zip).",
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['=<50%', '50% to 100%', '100% to 150%', '150% to 200%', '200% to 300%', '300% to 500%', '500% to 700%', '700% to 1000%', '1000% to 1500%', '1500% to 2000%', '2000% to 3000%', '>3000%'],
                                data1: [80, 90, 10, 70, 66, 34, 80, 90, 10, 70, 66, 34],
                                data2: [43, 30, 45, 20, 16, 50, 43, 30, 45, 20, 16, 50],
                            }
                        },
                        {
                            title: 'Where Providers Reside',
                            subtitle: 'Top 10 geographical locations of providers, by city, state, MSA, Rural and Urban areas.',
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['Micropolitan Statistical Areas', 'Metropolitan Statistical Areas'],
                                data1: [20, 60],
                                data2: [31, 10],
                            }
                        },
                        {
                            title: 'Wealth Indicators',
                            subtitle: "Numerical indicator of the relative wealth/poverty of the provider's immediate service area (zip).",
                            open: true,
                            icon: '',
                            type: 'vertical',
                            data: {
                                categories: ['<18 years old. 18-34 years old', '35-64 years old, >65'],
                                data1: [40, 15],
                                data2: [66, 30]
                            }
                        },
                        {
                            title: 'Access To Care Chart',
                            subtitle: 'Access To Care Chart.',
                            open: true,
                            icon: '',
                            type: 'horizontal',
                            data: {
                                categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'],
                                data1: [80, 40, 10, 70, 66, 34, 80, 10, 10, 70],
                                data2: [23, 12, 65, 10, 58, 71, 28, 29, 50, 40],
                                matched: '64'
                            }
                        }
                    ]
                },
                {
                    name: 'PRESCRIPTIONS',
                    value: '',
                    children: []
                },
                {
                    name: 'PROCEDURES',
                    value: '',
                    children: []
                },
                {
                    name: 'AFFILIATIONS',
                    value: '',
                    children: []
                }
            ];
        };
        //This method throw event 'window:resize' to resize echarts
        TargetComponent.prototype.tabActive = function () {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        };
        return TargetComponent;
    }());
    TargetComponent = __decorate([
        core_1.Component({
            selector: 'app-project-view-target',
            templateUrl: 'js/medikly/project-view/target-component/target.component.html',
            styleUrls: ['js/medikly/project-view/target-component/target.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TargetComponent);
    exports.TargetComponent = TargetComponent;
});
//# sourceMappingURL=target.component.js.map