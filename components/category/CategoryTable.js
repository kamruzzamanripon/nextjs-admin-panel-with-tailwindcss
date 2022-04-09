import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";


const CategoryTable = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Total Subcategory',
          dataIndex: 'subCount',
          key: 'subCount',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Total Product',
          dataIndex: 'productCount',
          key: 'productCount',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-600 p-2 border-b-2",
          render: () => <><a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a></>,
          
        },
      ];
      
      const data = [
        { id:'01', name: 'Jack', subCount: 28, productCount: 'some where' },
        { id:'02', name: 'Rose', subCount: 36, productCount: 'some where' },
      ];

      //Pagination
      const [activePage, setActivePage] = useState(15)
      const handlePageChange = (pageNumber)=>{
        setActivePage(pageNumber)
      }

    return (
        <>
        <Table columns={columns} data={data} rowKey="id"  className='bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold '/>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          nextPageText={'Next'}
          prevPageText={'Prev'}
          firstPageText={'First'}
          lastPageText={'Last'}
          innerClass="js-ul"
          itemClass='js-li'
          linkClass='page-link'
        />
        </>
        
    );
};

export default CategoryTable;