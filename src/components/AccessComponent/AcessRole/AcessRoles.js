import React, { useEffect, useState } from "react";
import { Popover } from 'react-tiny-popover'
import './accessRole.css'
const AcessRoles = (props) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [role, setRole] = useState([
        {
            label: 'Admin Role',
            role: 'admin_role',
            description: 'Gives full access to the job and candidates'
        },
        {
            label: 'Edit Access',
            role: 'edit_role',
            description: 'Gives access to edit the job and view the candidates'

        },
        {
            label: 'View Access',
            role: 'view_role',
            description: 'Gives access to only view the job and add comments'
        }
    ]);

    const getRoles = () => {
        const index = role.findIndex((res) => {
            return res.role == props?.data?.role
        });

        if (index != -1)
            return role[index]?.label
        else
            return 'View Access'
    }

    const getSelectedRole = (role) => {
        const obj = {
            assigned_role: role,
            data: props?.data
        }
        props.callback(obj)
    }

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['top', 'bottom', 'left', 'right']}
            content={
                <div className='popover-container' onClick={() => { setIsPopoverOpen(!isPopoverOpen) }}>
                    {
                        role.map((v, i) => {
                            return (
                                <div key={'inde_' + i} className='list-wrapper py-3 px-4' onClick={e => { getSelectedRole(v) }}>
                                    <div className='role-heading'>{v?.label}</div>
                                    <div className='role-description text-muted'>{v?.description}</div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        >
            <div className='assigned-role-name text-muted' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                <span className='role-selector'>{getRoles()}</span><i className='fa fa-angle-down ml-2 angle-down-icon'></i>
            </div>
        </Popover>
    )
}

export default AcessRoles;