import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => (
  <div>
    <h5>Performance Metrics</h5>
    <p>CPU Usage</p>
    <ProgressBar now={20} />
    <p>Memory Usage</p>
    <ProgressBar now={50} />
    <p>Disk Usage</p>
    <ProgressBar now={90} />
  </div>
);

export default PerformanceMetrics;