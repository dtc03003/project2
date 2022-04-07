import React from 'react';

const Record = ({ item }) => {

    return (
        <>
        <tr className='bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.no}</td>
            <td className='px-4 py-3'>{item.nickname}</td>
            <td className='px-4 py-3'>{item.age}</td>
        </tr>
        </>
    )
};

export default Record;