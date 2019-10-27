import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, scaleLinear, scaleOrdinal, max, min, format, extent, schemeSet2 } from 'd3';
import ReactDropdown from 'react-dropdown';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { Dropdown } from './Dropdown';
import { ColorLegend } from './ColorLegend';

const width = 960;
const menuHeight = 90;
// const height = 500;
const height = 500 - menuHeight;
const margin = { top: 20, right: 200, bottom: 70, left: 90 };
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 45;
const circleRadius = 3;


const attributes = [
  { value: 'year_built', label: 'Year Built' },
  { value: 'year_renovated', label: 'Year Renovated' },
  { value: 'price', label: 'Price (million)' },
  { value: 'sqft_living', label: 'Living(ksqft)' },
  { value: 'floors', label: 'Floors' },
  { value: 'sqft_basement', label: 'Basement(ksqft)' },
  { value: 'sqft_lot', label: 'Parking(ksqft)' },
  { value: 'bed_bath_ratio', label: 'Bed Bath Ratio' }
];

const xAttributes = [
  { value: 'year_built', label: 'Year Built' },
  { value: 'year_renovated', label: 'Year Renovated' },
];

const yAttributes = [
  { value: 'price', label: 'Price (million)' },
  { value: 'sqft_living', label: 'Living(ksqft)' },
  { value: 'sqft_basement', label: 'Basement(ksqft)' },
  { value: 'sqft_lot', label: 'Parking(ksqft)' }
];

const getLabel = value => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

const App = () => {
  const data = useData();

  const initialXAttribute = 'year_built';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = 'price';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  
  const colorValue = d => d.floors;
    const colorScale = scaleOrdinal(schemeSet2)
    .domain(data.map(colorValue));
  // const colorScale = scaleOrdinal(schemePastel2)
  //   .domain(data.map(colorValue))
  //   .range(['#E6842A', '#137B80', '#8E6C8A']);
  const colorLegendLabel = 'Floors';

  console.log(data);
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const xAxisTickFormat = format('');

  
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
  	.nice();
  

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">X</span>
        <ReactDropdown
          options={xAttributes}
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />
        <span className="dropdown-label">Y</span>
        <ReactDropdown
          options={yAttributes}
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />
      </div>
      
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={format('')}
            tickOffset={5}
          />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <AxisLeft 
            yScale={yScale} 
            innerWidth={innerWidth} 
            tickFormat={format('.2r')}
            tickOffset={5} />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight /
              2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={circleRadius}
          />
        </g>
        <g transform={`translate(${innerWidth + 150}, 60)`}>
          <text x={35} y={-25} className="axis-label" textAnchor="middle">
            {colorLegendLabel}
          </text>
          <ColorLegend
            tickSpacing={22}
            tickSize={10}
            tickTextOffset={12}
            tickSize={circleRadius}
            colorScale={colorScale}
          />
      	</g>
      </svg>
      
    </>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
