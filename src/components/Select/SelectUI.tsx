import { Select, Space } from 'antd'
import React from 'react'

const SelectUI = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          // size={size}
          defaultValue="Alabama"
          // onChange={handleChange}
          // options={options}
        />
    </Space>
  )
}

export default SelectUI
