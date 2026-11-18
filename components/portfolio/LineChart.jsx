const W = 520, H = 220, PAD = 32;

export default function LineChart ({points, unit, selected, onSelect}){
    const min = Math.min(...points);
    const max = Math.max(...points);

    const x = (i) => PAD + (i * (W- PAD * 2)) / (points.length - 1);
    const y = (v) => H- PAD- ((v - min) * (H- PAD * 2)) / (max - min || 1);

    const path = points
        .map((v, i) => `${x(i)}, ${y(v)}`)
        .join(' ');

    return (
        <svg className="chart" viewBox={`0 0 ${W} ${H}`}>
            <line className="axis" x1 ={PAD} y1={H - PAD}
                x2={W - PAD} y2={H - PAD} />
            <polyline className="line" points={path} />
            <text className="label" x={PAD} y={PAD -10}>
                {max} {unit}
            </text>
            {points.map((v, i) => (
                <circle
                    key={i}
                    cx={x(i)}
                    cy={y(v)}
                    r={selected === i ? 6 : 3.5}
                    className={selected === i ? 'dot dot-on' : 'dot'}
                    onClick={() => onSelect(i)}
                />
                ))}
        </svg>
    );
}