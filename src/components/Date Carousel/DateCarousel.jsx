import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// This is just to check these dependencies

const MyComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const items = [1, 2, 3, 4, 5].map(item => (
    <div key={item} className="item">
      Item {item}
    </div>
  ));

  return (
    <div>
      <h1>React Datepicker Example</h1>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      
      <h2>React Alice Carousel Example</h2>
      <AliceCarousel mouseTracking items={items} />
    </div>
  );
};

export default MyComponent;
