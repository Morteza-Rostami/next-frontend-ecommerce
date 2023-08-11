import AdminLay from '@/layout/AdminLay';
import Admin from '@/views/admin/Admin';
import React from 'react';

type indexProps = {
};

const AdminPage:React.FC<any> = () => {
  
  return (
    <AdminLay>
      <div
      className='
      container mx-auto 
      bg-gray-50
      '
      >
        <Admin/>
      </div>
    </AdminLay>
  )
}
export default AdminPage;