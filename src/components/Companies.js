import Company from './Company'
import companies from '../companies'

const Companies = () => {

  return (
    <div>
      {companies.map(company => (
        <Company
          key={company.name}
          company={company}
        />
      ))}
    </div>
  )
}

export default Companies
