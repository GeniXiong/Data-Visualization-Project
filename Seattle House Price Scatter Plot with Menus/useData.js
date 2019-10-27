import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/GeniXiong/e7c6bf03262966c543faa26805bf8bc7/raw/8d7be05b386eb3ad482510c99f72a49fe48e2197/seattleHousePrice2015.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.price = +d.price/1000000;
      d.bedrooms = +d.bedrooms;
      d.bathrooms = +d.bathrooms;
      d.bed_bath_ratio = d.bedrooms/d.bathrooms;
      d.floors = +d.floors;
      d.sqft_basement = +d.sqft_basement/1000;
      d.year_built = +d.year_built;
      d.year_renovated = +d.year_renovated;
      d.sqft_living = +d.sqft_living;
      d.zipcode = d.zipcode;
      d.lat = +d.lat;
      d.long = +d.long;
      d.sqft_lot = +d.sqft_lot;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};