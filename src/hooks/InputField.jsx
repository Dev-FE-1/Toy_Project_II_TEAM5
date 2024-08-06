import React from 'react'
import styled from 'styled-components'

function LoginInputField({ title, type, placeholder, value, onChange }) {
  return (
    <div>
      <label>{title}</label>
      <div>
        <LoginInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default function InputField({ title, type, placeholder, value, onChange }) {
  return (
    <div>
      <InputSection>
        <LoginInputField
          title={title}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputSection>
    </div>
  )
}

const InputSection = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: var(--black);
`

const LoginInput = styled.input`
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  padding-left: 15px;
`
