import React from 'react';
import styles from './Menu.module.css';
import {observer} from "mobx-react-lite";
import {apiStore} from "../../stores/AppStore";
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Box from '@mui/material/Box';

function Menu(props) {

    const getItemLabel = function (itemId) {
        console.log(itemId)

        // return item.label
    }
    return (
        <div className={styles.menu}>
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <RichTreeView items={apiStore.FAKE_DATA} getItemLabel={getItemLabel}/>
            </Box>
        </div>
    );
}

export default observer(Menu);