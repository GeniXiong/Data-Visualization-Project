import { useMemo } from 'react'; 

export const Marks = ({ map , data, path, projection, colorScale, colorValue, sizeValue}) => (
  <g className="marks">
    {useMemo(
      ()=>(
        <>
          {map.features.map(feature => (
      
      		<path className="land" d={path(feature)} />
    ))}
        </>
        ),
      [path, map]
        )}

    
    
    {data.map(d => {
      const [x, y] = projection([d.lng, d.lat]);
      return <circle cx={x} cy={y} r={sizeValue} fill={colorScale(colorValue(d))}/>
    })}
  </g>
);
