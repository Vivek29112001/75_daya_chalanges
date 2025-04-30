import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const formData = useSelector((state) => state.form.data);

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>Summary</h1>
      <div className='bg-white shadow-md rounded-md p-6 space-y-2'>
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Summary;
