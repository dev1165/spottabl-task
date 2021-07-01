
import React, { useRef, useState } from "react";


const SearchItemComponent = ({ data, searchData }) => {
    const [searchedData, setSearchedData] = useState([])
    const [show, setShow] = useState(false);
    const ipRef = useRef(null)

    const handleInputChange = (e) => {
        const val = e.target.value.toLowerCase();
        const filter_data = data.filter((res) => {
            let name = res.name.toLowerCase(),
                email = res.email.toLowerCase();
            return name.substring(0, val.length) === val || email.substring(0, val.length) === val;
        });
        setSearchedData(filter_data);
        if (val.length > 1)
            setShow(true)
        else
            setShow(false)
    }

    const handleShow = (res) => {
        ipRef.current.value = res.name;
        searchData(res);
        setShow(false)
    }

    return (
        <>
            <input type="text" className=' form-control search-input d-block' placeholder='Add by name or email' onChange={e => { handleInputChange(e) }} ref={ipRef} />
            {
                show ?
                    <div className='partial-search-floating-wrapper'>
                        {
                            searchedData.map((v, i) => {
                                return (
                                    <ol key={'ind_' + i} className="list-group list-group-numbered" onClick={e => { handleShow(v) }}>
                                        <li className="list-group-item">
                                            <div className='col-12'>
                                                <div className='row'>
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
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                )
                            })
                        }
                    </div>
                    : null
            }
        </>
    )
}

export default SearchItemComponent;