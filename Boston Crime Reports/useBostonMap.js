import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson';

const jsonUrl = 'https://gist.githubusercontent.com/GeniXiong/40c876429f659272241418eca00400df/raw/1ac290ae457fb8f947f4789cbc46fbbd43113f24/neighborhoods_json.json';

export const useBostonMap = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then(topology => {
      setData({
        land: topology
      });
    });
  }, []);

  return data;
};
