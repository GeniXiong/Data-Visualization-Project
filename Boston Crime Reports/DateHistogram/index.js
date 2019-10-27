import {
  scaleLinear,
  scaleTime,
  max,
  min,
  timeFormat,
  extent,
  histogram as bin,
  timeMonths,
  sum,
  brushX,
  select,
  event
} from 'd3';
import { useRef, useEffect, useMemo } from 'react';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const margin = { top: 0, right: 30, bottom: 20, left: 45 };
const xAxisLabelOffset = 54;
const yAxisLabelOffset = 30;

export const DateHistogram = ({
  data,
  width,
  height,
  setBrushExtent,
  xValue
}) => {
  const xAxisLabel = 'Time';

  const yValue = d => d.report;
  const yValue2 = d => d.shooting;
  const yAxisLabel = 'Total Crime Incident Reports';

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xAxisTickFormat = timeFormat('%m/%d/%Y');

  const xScale = useMemo(
    () => scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice(),
    [data, xValue, innerWidth]);

  

  const binnedData = useMemo(() => {
    
    return bin()
    .value(xValue)
    .domain(xScale.domain())
  	.thresholds(7)(data)
    // .thresholds(timeMonths(start, stop))(data)
    .map(array => ({
      y: sum(array, yValue),
      y2: sum(array, yValue2),
      x0: array.x0,
      x1: array.x1
    }));
  }, [xValue, xScale, yValue, yValue2 ]);

  const yScale = useMemo(
    () => scaleLinear()
    .domain([0, max(binnedData, d => d.y)])
    .range([innerHeight, 0]),
    [binnedData, innerHeight]);
  
  // const yScale2 = scaleLinear()
  //   .domain([0, max(binnedData, d => d.y2)])
  //   .range([innerHeight, 0]);

  const brushRef = useRef();

  useEffect(() => {
    const brush = brushX().extent([[0, 0], [innerWidth, innerHeight]]);
    brush(select(brushRef.current));
    brush.on('brush end', () => {
      setBrushExtent(event.selection && event.selection.map(xScale.invert));
    });
  }, [innerWidth, innerHeight]);

  return (
    <>
      <rect width={width} height={height} fill="white" />
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={d => d}
          circleRadius={2}
          innerHeight={innerHeight}
        />
        <g ref={brushRef} />
      </g>
    </>
  );
};
