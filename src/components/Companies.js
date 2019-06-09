import { useState } from 'react'
import Company from './Company'
import companies from '../companies'

const Companies = () => {
  const [time, setTime] = useState(0)

  // setInterval(() => {
  //   setTime(new Date())
  // }, 1000)
  return (
    <div>
      {companies
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(company => (
          <Company
            key={company.name}
            company={company}
          />
        ))}
    </div>
  )
}

export default Companies
