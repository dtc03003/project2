import React, { useEffect } from 'react';

const Td = ({ item }) => {

    return (
        <>
        <tr className='bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.statement}</td>
            <td className='px-4 py-3'>{item.sender}</td>
            <td className='px-4 py-3'>{item.receiver}</td>
            <td className='px-4 py-3'>{item.money}</td>
            <td className='px-4 py-3'>{item.transactionDate}</td>
        </tr>
    </>
    )
};

export default Td;