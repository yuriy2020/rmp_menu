import {makeAutoObservable} from "mobx"


class Store {
    constructor() {
        makeAutoObservable(this)
    }

    API_URL = 'http://localhost:8000/phonebook/main_info/'

    FAKE_DATA = [
        {
            "id": '1',
            "label": "Филиал 1",
            "children": [
                {
                    "id": '2',
                    "label": "Подразделение 1",
                    "children": [],
                    'filials': 1,
                },
                {
                    "id": '3',
                    "label": "Подразделение 2",
                    'filials': 1,
                    "type": "podrazdel",
                    "children": [
                        {
                            "id": '4',
                            "label": "Отдел 1",
                            'filials': 1,
                            'parent': 3,
                            "type": "otdel",
                            "children": [
                                {
                                    "id": '5',
                                    'filials': 1,
                                    'parent': 4,
                                    "label": "Кабинет 1",
                                    "type": "kabinet",
                                },
                            ],
                        }
                    ]

                },

            ]
        },

    ];

    columns = [
        {
            field: 'fio_name',
            headerName: 'ФИО',
            type: 'string',
        },
        {
            field: 'doljnost',
            headerName: 'Должность',
            type: 'string',
            flex: 1,
        },
        {
            field: 'room',
            headerName: 'Кабинет',
            type: 'string',
            flex: 1,
        },
        {
            field: 'KSPD',
            headerName: 'Внутр.номер',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Почта',
            type: 'string',
            flex: 1,
        },
        {
            field: 'phone_city',
            headerName: 'Городской номер',
            type: 'string',
            flex: 1,
        },
        {
            field: 'phone_mobile',
            headerName: 'Мобильный номер',
            type: 'string',
            flex: 1,
        },
    ]

    DATA = []

    aaa = 10

}

export const apiStore = new Store()