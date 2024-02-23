import React from 'react';

const ContactInfo = () => {
  const phoneNumber = '+4553671400'; 
  const emailAddress = 'half0150@edu.sde.dk'; 

  return (
    <div>
      <p className="text-teal-600">Tlf:</p>
      <a href={`tel:${phoneNumber}`}>{'+45 53 67 14 00'}</a>
      <p className="py-1">
        <p className="text-teal-600">Email:</p> 
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </p>
    </div>
  );
};

export default ContactInfo;
