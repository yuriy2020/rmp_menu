import React, {useEffect} from 'react';
import styles from './Menu.module.css';
import {observer} from "mobx-react-lite";
import {apiStore} from "../../stores/AppStore";
import Box from '@mui/material/Box';
import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem} from "@mui/x-tree-view";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

function Menu(props) {
    // функция для первоначального запроса при первом открытии меню
    // useEffect(() => {
    //     fetch('http://localhost:8080/fake_data')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }, []);

    const onClickItem = function (props) {
        console.log(props)
        if(!props.filials){
            return
        }
        const url = `${apiStore.API_URL}?filial_id=${props.filials}&format=json&podrazdel_id=${props.id}`

        fetch(url)
            .then(response => response.json())
            .then(json => apiStore.DATA = json)
    }


    const renderTree = (nodes) => {
        return nodes.id ?
            <TreeItem
                slots={{
                    // expandIcon: AddBoxIcon,
                    collapseIcon: CorporateFareIcon
                }}
                onClick={(e) => onClickItem(nodes)}
                key={nodes.id}
                itemId={nodes.id}
                label={nodes.label}
            >
                {Array.isArray(nodes.children) && nodes.children.map((node) => renderTree(node))}
            </TreeItem>
            : null
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