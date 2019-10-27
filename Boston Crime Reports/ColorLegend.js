export const ColorLegend = ({
  colorScale,
  tickSpacing = 30,
  tickSize = 10,
  tickTextOffset = 30,

}) =>
  colorScale.domain().map((domainValue, i) => (
    <g
      className="legendTick"
      transform={`translate(0,${i * tickSpacing})`}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        Part {domainValue}
      </text>
    </g>
  ));