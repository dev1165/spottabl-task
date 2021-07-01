import React, { useEffect, useState } from 'react';
import { Select, Tag } from 'antd';
const { Option } = Select;
import './searchAndSelect.css'


const tagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = event => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3, background: '#c5c5ff', color: '#4a3ef2' }}
        >
            {label}
        </Tag>
    );
}



const SearchAndSelect = (props) => {
    const [selected, setSelected] = useState([])
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(props.data)
    }, [])

    const handleChange = (value) => {
        setSelected(value)
    }

    const clearSelected = () => {
        setSelected([])
    }



    return (
        <div className='container-fluid component-wwrapper p-4 '>

            <div className='container'>
                <div className='row my-2'>
                    <div className='col-10'>
                        <h4 className='section-heading'>School/College/University</h4>
                    </div>
                    <div className='col-2 text-right'>
                        <span className='reset-button text-muted' onClick={clearSelected}><small>Reset</small></span>
                    </div>
                </div>
                <Select
                    mode="multiple"
                    allowClear
                    tagRender={tagRender}
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    value={selected}
                    onChange={handleChange}
                >
                    {
                        options.map((v, i) => {
                            return (
                                <Option key={i.toString(36) + i} value={v}>{v}</Option>
                            )
                        })
                    }
                </Select>

                <div className='col-12'>
                    <div className='row mt-3'>
                        <span className='text-muted'>Suggestions</span>
                        {
                            props.suggestion.map((v, i) => {
                                return <div key={'_ind_' + i} className='px-2 sugesstion-elements ml-2' onClick={e => { handleChange(v) }}>
                                    {v} +
                                </div>
                            })
                        }
                    </div>
                </div>
                <hr />
                <div>
                    <strong>selected tags are :{selected.toString()}</strong>
                </div>
            </div>
        </div>

    )
}
export default SearchAndSelect;


