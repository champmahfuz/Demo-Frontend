import React from 'react';
import styles from './ManageProfile.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';

const ManageProfile = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Manage Profile</span>
            <div className={`${styles.dropdownContent}`}>
                <li>
                    <PersonIcon className={`${styles.icon}`} />
                    <span>View Profile</span>
                </li>
                <li>
                    <LockResetIcon className={`${styles.icon}`} />
                    <span>Change Password</span>
                </li>
            </div>
        </div>
    );
};

export default ManageProfile;