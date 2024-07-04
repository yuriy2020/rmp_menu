import React from 'react';
import styles from './Main.module.css';
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import {observer} from "mobx-react-lite";
import {apiStore} from "../../stores/AppStore";
function Main(props) {
    return (
        <div className={styles.main}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={apiStore.DATA}
                    columns={apiStore.columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}

export default observer(Main);