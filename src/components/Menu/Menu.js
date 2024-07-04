import React, {useEffect} from 'react';
import styles from './Menu.module.css';
import {observer} from "mobx-react-lite";
import {apiStore} from "../../stores/AppStore";
import Box from '@mui/material/Box';
import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem} from "@mui/x-tree-view";

function Menu(props) {

    const onKeyDown = function (itemId, props) {
        console.log(itemId, props.linkapi)
    }

    const renderTree = (nodes) => {
        return nodes.id ? <TreeItem
            onClick={(e) => onKeyDown(nodes.id, nodes.props || {})}
            key={nodes.id}
            itemId={nodes.id}
            label={nodes.label}
            props={nodes.props ? nodes.props : {}}>
            {Array.isArray(nodes.children) && nodes.children.map((node) => renderTree(node))}
        </TreeItem> : null
    }

    return (
        <div className={styles.menu}>
            <Box sx={{minHeight: 352, minWidth: 250}}>
                <SimpleTreeView>
                    {apiStore.FAKE_DATA.map((item) => renderTree(item))}
                </SimpleTreeView>
            </Box>
        </div>
    );
}

export default observer(Menu);