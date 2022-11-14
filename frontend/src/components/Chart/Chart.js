import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, Tooltip } from 'recharts'
import styles from './Chart.module.scss'
import { Tooltip1 } from './ToolTip1'

export const Chart = ({ title, data }) =>
  data && (
    <div className={styles.chart}>
      <div className={styles.title}>{title}</div>
      <LineChart width={300} height={200} data={data}>
        <Tooltip
          wrapperStyle={{ outline: 'none' }}
          content={(state) => <Tooltip1 label={data[state.label]?.uv} />}
        />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  )

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}
