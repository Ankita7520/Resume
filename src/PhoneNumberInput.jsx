// import React, { useState } from 'react';
// import 'react-phone-number-input/style.css'; // Import the CSS
// import PhoneInput, { getCountries } from 'react-phone-number-input';

// function PhoneNumberInput() {
//   const [phoneValue, setPhoneValue] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleChange = (value, country) => {
//     setPhoneValue(value);
//     setSelectedCountry(country);
//   };

//   return (
//     <div>
//       <PhoneInput
//         placeholder="Enter phone number"
//         value={phoneValue}
//         onChange={handleChange}
//         country={selectedCountry} // Pass the selected country
//         countries={getCountries()} // Get all available countries
//         flags={false} // Disable flag display
//       />
     
//     </div>
//   );
// }

// export default PhoneNumberInput;


// import React, { useState } from 'react';
// import 'react-phone-number-input/style.css'; // Import the CSS

// import PhoneInput from 'react-phone-number-input';

// function PhoneNumberInput() {
//   const [phoneValue, setPhoneValue] = useState('');

//   const handleChange = (value) => {
//     setPhoneValue(value);
//   };

//   return (
//     <div className='back'>
//       <PhoneInput
        
//         value={phoneValue}
//         onChange={handleChange}
//       />
     
//     </div>
//   );
// }

// export default PhoneNumberInput;
import React, { useState } from 'react';
import 'react-phone-number-input/style.css'; // Import the CSS

import PhoneInput from 'react-phone-number-input';

function PhoneNumberInput() {
  const [phoneValue, setPhoneValue] = useState('');

  const handleChange = (value) => {
    setPhoneValue(value);
  };

  return (
    <div>
      <PhoneInput 
        
        value={phoneValue}
        onChange={handleChange}
      />
      <p> {phoneValue }</p>
    </div>
  );
}

export default PhoneNumberInput;

