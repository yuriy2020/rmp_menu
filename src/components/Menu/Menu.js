import React from 'react';
import styles from './Menu.module.css';
import {observer} from "mobx-react-lite";
import {apiStore} from "../../stores/AppStore";
import {RichTreeView} from '@mui/x-tree-view/RichTreeView';
import Box from '@mui/material/Box';
import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem} from "@mui/x-tree-view";

function Menu(props) {

    const getItemLabel = function (e, itemId, ddd) {
        console.log(e, itemId, ddd)
    }
    const onKeyDown = function (e, itemId, ddd) {
        console.log(e, itemId, ddd)
    }
    const renderTree = (nodes) => {
        return nodes.id ? <TreeItem key={nodes.id} itemId={nodes.id} label={nodes.label} ContentProps={nodes.linkapi ?nodes.linkapi: {'xxx': 'yyy'}}>
            {Array.isArray(nodes.children) && nodes.children.map((node) => renderTree(node))}
        </TreeItem> : null
    }

    return (
        <div className={styles.menu}>
            <Box sx={{minHeight: 352, minWidth: 250}}>
                <RichTreeView items={apiStore.FAKE_DATA} onItemFocus={getItemLabel}/>
                <SimpleTreeView onItemFocus={onKeyDown}>
                    {apiStore.FAKE_DATA.map((item) => renderTree(item))}
                </SimpleTreeView>
            </Box>
        </div>
    );
}

export default observer(Menu);