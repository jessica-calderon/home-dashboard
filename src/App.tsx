import React from 'react';
import CalendarWidget from './components/CalendarWidget/CalendarWidget';
import ClockWidget from './components/ClockWidget/ClockWidget';
import ImageWidget from './components/ImageWidget/ImageWidget';
import MilitaryClockWidget from './components/MilitaryClockWidget/MilitaryClockWidget';
import TODOWidget from './components/TODOWidget/TODOWidget';
import TodayDateWidget from './components/TodayDateWidget/TodayDateWidget';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import USHolidaysWidget from './components/USHolidaysWidget/USHolidaysWidget';


const App: React.FC = () => {

  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen w-screen p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Left column spanning 1/3 */}
        <div className="col-span-1 space-y-4">
          <WeatherWidget />
          <TodayDateWidget />
          <USHolidaysWidget/>
          {/* <StatsWidget /> */}
          {/* Additional widgets can go here */}
        </div>
        {/* Middle column spanning 1/3 */}
        <div className="col-span-1 space-y-4">
          <ClockWidget />
          <MilitaryClockWidget />
          <CalendarWidget />
        </div>
        {/* Right column spanning 1/3 */}
        <div className="col-span-1 space-y-4">
          <TODOWidget />
          <ImageWidget />
          {/* <NewsFeedWidget />
                <QuotesWidget /> */}
          {/* Additional widgets can go here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
