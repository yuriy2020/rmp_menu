import {makeAutoObservable} from "mobx"


class Store {
    constructor() {
        makeAutoObservable(this)
    }

    FAKE_DATA = [
        {
            "id": '10446',
            "label": "Филиал 1",
            'link-api': 'https://localhost:8000/filial_1',
            "children": [
                {
                    "id": '10447',
                    "label": "Подразделение 1",
                    "children": []
                },
                {
                    "id": '10448',
                    "label": "Подразделение 2",
                    "children": [
                        {
                            "id": '10449',
                            "label": "Подразделение 3",
                            "children": [
                                {
                                    "id": '10450',
                                    "label": "Филиал 2",
                                    "children": [
                                        {
                                            "id": '10451',
                                            "label": "Подразделение 4",
                                            "children": []
                                        },
                                        {
                                            "id": '10452',
                                            "label": "Подразделение 5",
                                            "children": [
                                                {
                                                    "id": '10453',
                                                    "label": "Подразделение 6",
                                                }
                                            ]

                                        },

                                    ]
                                },
                            ]
                        }
                    ]

                },

            ]
        },
    //     {
    //         "id": 10450,
    //         "label": "Филиал 2",
    //         "children": [
    //             {
    //                 "id": 10451,
    //                 "label": "Подразделение 4",
    //                 "children": []
    //             },
    //             {
    //                 "id": 10452,
    //                 "label": "Подразделение 5",
    //                 "children": [
    //                     {
    //                         "id": 10453,
    //                         "label": "Подразделение 6",
    //                     }
    //                 ]
    //
    //             },
    //
    //         ]
    //     },
    ];

}

export const apiStore = new Store()