import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/GeniXiong/543400f47d4b937a6379a9105e70c47f/raw/134f056de16d5bb6a3277e319f21261b8dfdb8c5/boston_crime_incident_reports.csv';

export const useData = () => {
  const [data, setData] = useState(null);
  
  const ucr_dict = {'Part One':1, 'Part Two': 2, 'Part Three': 3, 'Other': 0, '':0};

  useEffect(() => {
    const row = d => {
      d.lat = +d.Lat;
      d.lng = +d.Long;
      d.date = new Date(d.OCCURRED_ON_DATE);
      d.shooting = +d.SHOOTING;
      d.ucr = ucr_dict[d.UCR_PART];
      d.offense_group = d.OFFENSE_CODE_GROUP;
      d.report = 1;

      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  // console.log(data);
  return data;
};