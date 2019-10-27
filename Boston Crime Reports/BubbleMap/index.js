import React, { useMemo }  from 'react';
import { scaleSqrt, scaleOrdinal, geoPath, geoAlbers} from 'd3';
import { Marks } from './Marks';

export const BubbleMap = ({ map, data, width, height, colorScale, colorValue }) => {
  
  
	const projection = useMemo(
    () => geoAlbers()
	.scale( 100000 )
	.rotate( [71.057,0] )
	.center( [0.13, 42.33] )
	.translate( [width/2,height/2] ),
    [width, height]);
	const path = useMemo(
    () => geoPath()
	.projection( projection ),
  [projection]);

  return (
    <Marks
      map={map.land}
      data={data}
      path = {path}
      projection = {projection}
      colorScale = {colorScale}
      colorValue = {colorValue}
      sizeValue={3}
    />
  );
};