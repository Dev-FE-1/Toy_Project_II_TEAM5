import { useState } from 'react'

const useForm = (initialState, callback) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value }

      if (callback) {
        callback(name, value, updatedData)
      }

      return updatedData
    })
  }

  return [formData, handleChange]
}

export default useForm
