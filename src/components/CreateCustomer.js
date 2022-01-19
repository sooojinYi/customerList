import React from 'react';
import{Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function CreateCustomer(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        c_name:"",
        c_phone:"",
        c_birthday:"",
        c_gender:"",
        c_addr:""
    })
    const onChange = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name,value)
    }
    //폼 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        insertCustomer();
        setFormData({
            c_name:"",
            c_phone:"",
            c_birthday:"",
            c_gender:"",
            c_addr:""
        })
    }
    //post 전송 axios
    function insertCustomer(){
        axios.post("http://localhost:8080/addCustomer", formData)
        .then(function(res){
            console.log(res);
            navigate(-1);
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <form onSubmit={onSubmit}>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                이름
                            </TableCell>
                            <TableCell>
                                <input name="c_name" type="text" value={formData.c_name} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                연락처
                            </TableCell>
                            <TableCell>
                                <input name="c_phone" type="text" value={formData.c_phone} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                생년월일
                            </TableCell>
                            <TableCell>
                                <input name="c_birthday" type="date" value={formData.c_birthday} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                성별
                            </TableCell>
                            <TableCell>
                                여성 <input name="c_gender" value="여성" type="radio" onChange={onChange}/>
                                남성 <input name="c_gender" value="남성" type="radio" onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                주소
                            </TableCell>
                            <TableCell>
                                <input name="c_addr" type="text" value={formData.c_addr} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <button type='submit'>등록</button>
                                <button type='reset'>취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default CreateCustomer;