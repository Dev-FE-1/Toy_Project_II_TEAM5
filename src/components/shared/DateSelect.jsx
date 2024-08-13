import styled from 'styled-components'

function DateSelect({ name, value, onChange, data }) {
  return (
    <Select name={name} value={value} onChange={onChange}>
      {data.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </Select>
  )
}

const Select = styled.select`
  width: 160px;
  height: 50px;
  box-sizing: border-box;
  padding: 5px 12px;
  border: 1px solid #eceff5;
  outline: none;

  & span {
    width: 10px;
    height: 10px;
  }
`

export default DateSelect
