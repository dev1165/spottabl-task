import React, { useCallback, useEffect, useState } from "react";
import "./accessComponent.css";
import AccessRoles from './AcessRole/AcessRoles'
import SearchItemComponent from '../SearchItemComponent/SearchItemComponent'
const AcessComponent = (props) => {
    const [tempArr, setTempArr] = useState([
        {
            name: 'Vanishree Deshpande',
            designation: 'Hiring  Manager',
            email: 'vani@spottabl.com',
            role: 'admin_role'
        },
    ])
    const [assign, setAssign] = useState({})
    const [searchRes, setSearchRes] = useState({})

    const handleAccess = (val) => {
        let arr = [...tempArr];
        var index = tempArr.findIndex((res) => {
            return res.email === val?.data?.email && res.name === val?.data?.name;
        });
        arr[index] = { ...arr[index], role: val.assigned_role.role }
        setTempArr(arr);
    }

    const handleDelete = (index) => {
        const arr = tempArr;
        arr.splice(index, 1);
        setTempArr([...arr]);
    }

    const nameShort = (v) => {
        let name = v.name.split(' '),
            f = name[0].split(''),
            l = name[1].split('');
        let final = f[0] + l[0];
        return final;
    }

    const getSearchedData = (res) => {
        setSearchRes(res)
    }

    const handleSearchedAccess = (val) => {
        const test = { ...searchRes, role: val.assigned_role.role }
        setSearchRes(test)
        setAssign(test)
    }

    const assignRole = useCallback(() => {
        const arr = tempArr;
        arr.push(assign)
        setTempArr([...tempArr], arr)
    }, [assign, tempArr])


    return (
        <div className='container-fluid component-wwrapper p-4 '>
            <div className='searchbox-container mb-4'>
                <div className='search-item-container my-auto'>
                    <SearchItemComponent
                        data={props.names}
                        searchData={getSearchedData}
                    />
                </div>
                <div className='access-box-container my-auto'>
                    <AccessRoles
                        default={true}
                        data={searchRes}
                        callback={handleSearchedAccess}
                    />
                </div>
                <div className='submit-button-container my-auto'>
                    <input type="button" value='Add People' className='submit-button py-2 px-4' onClick={assignRole} />
                </div>
            </div>
            {
                tempArr.map((v, i) => {
                    return (
                        <ol key={'ind_' + i} className="list-group list-group-numbered">
                            <li className="list-group-item">
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-1 my-auto'>
                                            <div className='short-name-wrapper text-center py-3'>
                                                {nameShort(v)}
                                            </div>
                                        </div>
                                        <div className='col-8 my-auto'>
                                            <div className='text-left'>{v.name}</div>
                                            <div className='row'>
                                                <div className='ml-3'>
                                                    <small >
                                                        <span className='my-auto'>
                                                            <i className='fa fa-user mr-1 person-position'></i>
                                                        </span>
                                                        <span className='my-auto'>
                                                            <strong className='text-muted'>
                                                                {v.designation}
                                                            </strong>
                                                        </span>
                                                    </small>
                                                </div>

                                                <div className='ml-2'>
                                                    <small className='text-muted'>
                                                        <span className='my-auto'>
                                                            <i className='fa fa-circle mr-1 dot-circle-email'></i>
                                                        </span>
                                                        <span className='my-auto'>
                                                            {v.email}
                                                        </span>
                                                    </small>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-2 my-auto'>
                                            <AccessRoles
                                                data={v}
                                                callback={handleAccess}
                                            />
                                        </div>
                                        <div className='col-1 my-auto'>
                                            <span>
                                                <i className='fa fa-trash trash-icon' onClick={e => { handleDelete(i) }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    )
                })
            }
        </div>
    )
}

export default AcessComponent;