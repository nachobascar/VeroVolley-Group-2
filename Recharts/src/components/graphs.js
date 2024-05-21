import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const COLORS = {
  quantity: "#A3A3A3",
  positive: "#20519F",
  negative: "#e14547",
  neutral: "#A8D9FD",
  Sylla: "#8884d8",
  Orro: "#82ca9d",
  Egonu: "#ffc658",
  Danesi: "#ff7300",
  Larson: "#ff0000",
  Facebook: "#1877F2",
  Instagram: "#de3ab7",
  Web: "#66CDAA",
};

export const getFontSize = (width) => {
  return Math.round((width * 24) / 1000) + 1;
};

export const formatter = (width) => {
  return (value, entry, index) => {
    return (
      <span
        style={{
          color: COLORS[value],
          fontSize: getFontSize(width),
        }}
      >
        {value}
      </span>
    );
  };
};

export const renderCustomizedPieLabel = (width) => {
  return ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    value,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius =
      25 + innerRadius + (outerRadius - innerRadius) + getFontSize(width) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={COLORS[name]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={getFontSize(width) * 2}
      >
        {`${value} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };
};

export const BarChartComponent = ({
  ylabel,
  data,
  graphRef,
  height = 400,
  width = "100%",
}) => {
  return (
    <div style={{ border: "1px solid black", width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          ref={graphRef}
          data={data}
          margin={{
            top: getFontSize(width),
            right: getFontSize(width),
            left: getFontSize(width),
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6495CE" stopOpacity={1} />
              <stop
                offset="10%"
                stopColor={COLORS["positive"]}
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor={COLORS["positive"]}
                stopOpacity={0.8}
              />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C58FA2" stopOpacity={1} />
              <stop
                offset="10%"
                stopColor={COLORS["neutral"]}
                stopOpacity={1}
              />
              <stop
                offset="50%"
                stopColor={COLORS["neutral"]}
                stopOpacity={0.7}
              />
              <stop
                offset="90%"
                stopColor={COLORS["neutral"]}
                stopOpacity={1}
              />
              <stop offset="100%" stopColor="#6495CE" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={COLORS["negative"]}
                stopOpacity={0.8}
              />
              <stop
                offset="90%"
                stopColor={COLORS["negative"]}
                stopOpacity={1}
              />
              <stop offset="100%" stopColor="#C58FA2" stopOpacity={1} />
            </linearGradient>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#20519F" stopOpacity={1} />
            <stop offset="100%" stopColor="#20519F" stopOpacity={0.2} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#A8D9FD" stopOpacity={1} />
            <stop offset="100%" stopColor="#A8D9FD" stopOpacity={0.2} />
          </linearGradient>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#e14547" stopOpacity={1} />
            <stop offset="100%" stopColor="#e14547" stopOpacity={0.2} />
          </linearGradient> */}
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize={getFontSize(width)} />
          <YAxis
            label={{
              value: ylabel,
              angle: -90,
              position: "insideLeft",
              fontSize: getFontSize(width),
            }}
            fontSize={getFontSize(width)}
          />
          <Tooltip />
          <Legend
            formatter={formatter(width)}
            iconSize={getFontSize(width) / 2}
            wrapperStyle={{ paddingTop: getFontSize(width) }}
          />
          <Bar dataKey="positive" fill="url(#colorUv)" stackId="a" />
          <Bar dataKey="neutral" fill="url(#colorPv)" stackId="a" />
          <Bar dataKey="negative" fill="url(#colorAmt)" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const AreaChartComponent = ({
  ylabel,
  data,
  graphRef,
  height = 400,
  width = "100%",
}) => {
  return (
    <div style={{ border: "1px solid black", width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          ref={graphRef}
          data={data}
          margin={{
            top: getFontSize(width),
            right: getFontSize(width),
            left: getFontSize(width),
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={COLORS["positive"]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={COLORS["positive"]}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={COLORS["negative"]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={COLORS["negative"]}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={COLORS["neutral"]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={COLORS["neutral"]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize={getFontSize(width)} />
          <YAxis
            label={{
              value: ylabel,
              angle: -90,
              position: "left",
              fontSize: getFontSize(width),
              offset: 10,
            }}
            fontSize={getFontSize(width)}
          />
          <Tooltip />
          <Legend
            formatter={formatter(width)}
            iconSize={(getFontSize(width) * 2) / 3}
            wrapperStyle={{ paddingTop: getFontSize(width) }}
          />
          <Area
            type="monotone"
            dataKey="positive"
            stroke={COLORS["positive"]}
            fill="url(#color1)"
          />
          <Area
            type="monotone"
            dataKey="negative"
            stroke={COLORS["negative"]}
            fill="url(#color2)"
          />
          <Area
            type="monotone"
            dataKey="neutral"
            stroke={COLORS["neutral"]}
            fill="url(#color3)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const RadarChartComponent = ({
  data,
  graphRef,
  height = 400,
  width = "100%",
}) => {
  return (
    <div style={{ border: "1px solid black", width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          ref={graphRef}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            fontSize={getFontSize(width) * 1.8}
          />
          <PolarRadiusAxis />
          {/* <Radar
          name="Neutrality"
          dataKey="neutral"
          stroke={COLORS["neutral"]}
          fill={COLORS["neutral"]}
          fillOpacity={0.6}
        /> */}
          <Radar
            name="Quantity"
            dataKey="quantity"
            stroke={COLORS["quantity"]}
            fill={COLORS["quantity"]}
            fillOpacity={0.6}
          />
          <Radar
            name="Positivity"
            dataKey="positive"
            stroke={COLORS["positive"]}
            fill={COLORS["positive"]}
            fillOpacity={0.6}
          />
          <Radar
            name="Negativity"
            dataKey="negative"
            stroke={COLORS["negative"]}
            fill={COLORS["negative"]}
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend
            formatter={formatter(width * 1.8)}
            iconSize={getFontSize(width)}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SingleRadarChartComponent = ({
  data,
  graphRef,
  height = 400,
  width = "100%",
}) => {
  const invertedData = ["positive", "negative", "neutral"].map((key) => {
    const item = {
      subject: key,
    };
    for (const value of data) {
      item[value.subject] = value[key];
    }
    return item;
  });

  const [names, setNames] = React.useState([data[0].subject]);

  return (
    <>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div style={{ border: "1px solid black", width, height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={invertedData}
              ref={graphRef}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="subject"
                fontSize={getFontSize(width * 2)}
              />
              <PolarRadiusAxis />

              {names.map((name) => (
                <Radar
                  key={name}
                  name={name}
                  dataKey={name}
                  stroke={COLORS[name]}
                  fill={COLORS[name]}
                  fillOpacity={0.6}
                />
              ))}

              <Tooltip />
              <Legend
                formatter={formatter(width * 2)}
                iconSize={getFontSize(width)}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <select
        value={names}
        onChange={(e) =>
          setNames(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        style={{
          width: "600px",
          height: "50px",
          fontSize: 26,
        }}
        multiple={true}
        size={1}
      >
        {data.map((item) => (
          <option
            key={item.subject}
            value={item.subject}
            style={{
              color: COLORS[item.subject],
              display: "inline-block",
              width: 100,
              textAlign: "center",
            }}
          >
            {item.subject}
          </option>
        ))}
      </select>
    </>
  );
};

export const PieChartComponent = ({
  title,
  data,
  graphRef,
  height = 400,
  width = "100%",
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div style={{ border: "1px solid black", width, height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart ref={graphRef}>
            <defs>
              {data.map((item) => (
                <linearGradient
                  key={item.name}
                  id={`colorGradient-${item.name}`}
                  x1="1"
                  y1="1"
                  x2="0"
                  y2="0"
                >
                  <stop
                    offset="50%"
                    stopColor={COLORS[item.name]}
                    stopOpacity={1}
                  />
                  <stop
                    offset="100%"
                    stopColor={COLORS[item.name]}
                    stopOpacity={0.6}
                  />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="40%"
              fill="#8884d8"
              label={renderCustomizedPieLabel(width)}
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={`url(#colorGradient-${entry.name})`}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              formatter={formatter(width)}
              iconSize={getFontSize(width)}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};