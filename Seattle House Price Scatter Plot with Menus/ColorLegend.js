export const ColorLegend = ({
  colorScale,
  tickSpacing = 30,
  tickSize = 10,
  tickTextOffset = 20,

}) =>
  colorScale.domain().map((domainValue, i) => (
    <g
      className="tick"
      transform={`translate(0,${i * tickSpacing})`}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ));