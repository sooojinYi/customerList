import React from 'react';
import{Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import useAsync from '../hooks/useAsync';
import { useState } from 'react'
import axios from 'axios';

function EditCustomer() {
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

    async function getCustomer(){
        const response = await axios.get(
            `http://localhost:8080/`
        )
        return response.data;
    }
    const state = useAsync(getCustomer);
    const { loading, error, data:customer } = state;
    console.log(customer);

    if(loading) return <div>로딩중...... </div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!customer) return null;

    return (
        <div>
            <h2>고객 수정하기</h2>
            <form>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                이름
                            </TableCell>
                            <TableCell>
                                <input name="c_name" type="text"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                연락처
                            </TableCell>
                            <TableCell>
                                <input name="c_phone" type="text"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                생년월일
                            </TableCell>
                            <TableCell>
                                <input name="c_birthday" type="date"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                성별
                            </TableCell>
                            <TableCell>
                                여성 <input name="c_gender" value="여성" type="radio"/>
                                남성 <input name="c_gender" value="남성" type="radio"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                주소
                            </TableCell>
                            <TableCell>
                                <input name="c_addr" type="text"/>
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

export default EditCustomer;