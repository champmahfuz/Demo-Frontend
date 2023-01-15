import React from 'react';
import Clock from '../SearchSidebar/Clock/Clock';
import PriceRange from '../SearchSidebar/PriceRange/PriceRange';
import Schedules from '../SearchSidebar/PriceRange/Schedule/Schedules/Schedules';
import SortAndFilter from '../SearchSidebar/SortAndFilter/SortAndFilter';

const SearchSidebar = () => {
    return (
        <div>
            <Clock />
            <PriceRange />
            <Schedules />
            <SortAndFilter />
        </div>
    );
};

export default SearchSidebar;