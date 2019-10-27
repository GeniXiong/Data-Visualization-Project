import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import { useBostonMap } from './useBostonMap';
import { useData } from './useData';
import { BubbleMap } from './BubbleMap/index.js';
import { DateHistogram } from './DateHistogram/index.js';
import { ColorLegend } from './ColorLegend';
import { scaleOrdinal, schemeTableau10 } from 'd3';

const width = 960;
const height = 500;
const menuHeight = 90;
// const height = 500 - menuHeight;
const margin = { top: 20, right: 200, bottom: 20, left: 20 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const dateHistogramSize = 0.2;

const xValue = d => d.date;

const App = () => {
  const bostonMap = useBostonMap();
  const data = useData();
  const [brushExtent, setBrushExtent] = useState();

  if (!bostonMap || !data) {
    return <pre>Loading...</pre>;
  }
  
  const filteredData = brushExtent ? data.filter(d => {
    const date = xValue(d);
    return date > brushExtent[0] && date < brushExtent[1];
  }) : data;
  
  const colorLegendLabel='Uniform Crime Report';
	const circleRadius = 8;
  const colorValue = d => d.ucr;
  const colorScale = scaleOrdinal(schemeTableau10)
      // .range(["#98abc5", "#a05d56", "#ff8c00", "#d0743c"])
      .domain(data.map(colorValue));

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <BubbleMap 
          map={ bostonMap } 
          data={ filteredData}
          width={width}
          height={(1-dateHistogramSize) * innerHeight}
          colorScale={colorScale}
          colorValue={colorValue}/>
        
        <g transform={`translate(0, ${innerHeight-dateHistogramSize * innerHeight})`}>
          <DateHistogram
            data={data}
            width={width-2 * margin.left}
            height={dateHistogramSize * innerHeight}
            setBrushExtent={setBrushExtent}
            xValue={xValue}
          />
        </g>
        
        <g transform={`translate(${innerWidth}, 100)`}>
          <text x={35} y={-25} className="legend label" textAnchor="middle">
            {colorLegendLabel}
          </text>
          <ColorLegend
            tickSpacing={20}
            tickSize={10}
            tickTextOffset={12}
            tickSize={circleRadius}
            colorScale={colorScale}
          />
      	</g>
      </g>
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
