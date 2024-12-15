import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import {
  CandlestickSeries,
  Chart,
  ChartCanvas,
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY,
  OHLCTooltip,
  XAxis,
  YAxis,
  ZoomButtons,
  discontinuousTimeScaleProviderBuilder,
  lastVisibleItemBasedZoomAnchor,
} from 'react-financial-charts';
import mockData from '../mocks/chartData.json';

type ChartProps = {
  width: number;
};

// export const FinancialChart = ({ width }: ChartProps) => {
export default function FinancialChart({ width }: ChartProps) {
  const height = 400;
  const margin = { left: 50, right: 50, top: 10, bottom: 30 };

  const ScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d) => new Date(d.date)
    );

  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(mockData);
  const pricesDisplayFormat = format('.2f');
  const xExtents = [xAccessor(data[0]), xAccessor(data[data.length - 1])];

  return (
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName='Price Chart'
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis />
        <YAxis tickFormat={pricesDisplayFormat} />
        <CandlestickSeries />
        <MouseCoordinateX displayFormat={timeFormat('%Y-%m-%d')} />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />
        <OHLCTooltip origin={[-40, 0]} />
        <ZoomButtons />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
}
