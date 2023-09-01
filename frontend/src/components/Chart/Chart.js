import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, Tooltip as RechartsTooltip } from 'recharts'
import styles from './Chart.module.scss'
import { Tooltip } from './ToolTip'

export const Chart = ({ title, data }) => (
  <div className={styles.chart}>
    <div className={styles.title}>{title}</div>
    <LineChart width={300} height={200} data={data}>
      <RechartsTooltip
        wrapperStyle={{ outline: 'none' }}
        content={(state) => <Tooltip label={data[state.label]?.value} />}
      />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </div>
)

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}
