import React, { useState } from "react"
import { Col, InputNumber, Slider, Row } from "antd"
import cls from "./filter.module.scss"

const FilterSlider: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(1)
  const [maxValue, setMaxValue] = useState<number>(1000)

  const handleMinChange = (value: number | undefined) => {
    if (value !== undefined) {
      setMinValue(value)
    }
  }

  const handleMaxChange = (value: number | undefined) => {
    if (value !== undefined) {
      setMaxValue(value)
    }
  }

  const handleSliderChange = (value: number | [number, number] | undefined) => {
    if (Array.isArray(value) && value.length === 2) {
      setMinValue(value[0])
      setMaxValue(value[1])
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <span className={cls.priceLabel}>Цена</span>
      </div>
      <div className={cls.inputWrapper}>
        <InputNumber
          min={1}
          max={1000}
          style={{ width: "124px", marginRight: "34px" }}
          value={minValue}
          onChange={handleMinChange}
        />
        <InputNumber
          min={1}
          max={1000}
          style={{ width: "124px" }}
          value={maxValue}
          onChange={handleMaxChange}
        />
      </div>
      <Slider
        className={cls.slider}
        range
        min={1}
        max={1000}
        step={1}
        value={[minValue, maxValue]}
        onChange={handleSliderChange}
        style={{ width: "272px" }}
      />
    </div>
  )
}

export default FilterSlider