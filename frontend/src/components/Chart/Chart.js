import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, YAxis } from 'recharts'
import styles from './Chart.module.scss'

export const Chart = ({ title, data }) =>
  data && (
    <div className={styles.chart}>
      <h1>{title}</h1>
      <LineChart width={200} height={200} data={data} border>
        <YAxis />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  )

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
}
