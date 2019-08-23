import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ApplicationRowMenu.module.css';
// import DeletePlant from '../DeletePlant/DeletePlant';
import ClickArea from '../ClickArea/ClickArea';

const ApplicationRowMenu = (props) => {
    return (
        <div className="flex">
        <i className="far fa-edit" onClick={props.handleMenuClick}></i>
        <div className={[props.menuDisplay, styles.buttonRow].join(' ')}>
            <div className={[styles.plantNav, styles.buttonRow].join(' ')}>
                <Link
                    to={{
                        pathname: `/plants/${props.plantId}/edit`,
                        plant: props.plant,
                    }}
                    className="nav-link"
                >
                    <button className="mr5 btn btn-primary btn-sm">Edit Plant</button>
                </Link>
                <ClickArea handleClose={props.handleDeleteCancel}>
                    {/* <DeletePlant
                        className={styles.plantNav}
                        plantId={props.plantId}
                        deleteConfirmDisplay={props.deleteConfirmDisplay}
                        deleteButtonDisabled={props.deleteButtonDisabled}
                        handleDeleteDialogue={props.handleDeleteDialogue}
                        handleDeleteCancel={props.handleDeleteCancel}
                        handleDeleteConfirm={props.handleDeleteConfirm}
                    /> */}
                </ClickArea>
            </div>
        </div>
    </div>
    );
}
 
export default ApplicationRowMenu;