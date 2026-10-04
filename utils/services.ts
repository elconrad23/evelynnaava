export interface ServiceSummary {
  slug: string
  title: string
  description: string
}

export const services: ServiceSummary[] = [
  {
    slug: 'securities-trading',
    title: 'Securities Trading',
    description: 'Buy and sell listed shares with guidance grounded in research, not speculation.'
  },
  {
    slug: 'unit-trusts',
    title: 'Unit Trusts',
    description: 'Grow your wealth through professionally managed funds matched to your goals.'
  },
  {
    slug: 'bonds',
    title: 'Bonds',
    description: 'Earn steady, predictable returns with government and corporate bonds.'
  },
  {
    slug: 'investment',
    title: 'Investment',
    description: 'A tailored investment plan that balances growth, risk and your timeline.'
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    description: 'Motor, health, life, travel, education and agricultural cover, all in one place.'
  }
]

export interface InsuranceLine {
  name: string
  description: string
}

export const insuranceLines: InsuranceLine[] = [
  { name: 'Motor Insurance', description: 'Protect what moves you, from private cars to commercial fleets.' },
  { name: 'Health Insurance', description: 'Access quality medical care for you and the people who depend on you.' },
  { name: 'Life Insurance', description: 'Give your family lasting financial security, whatever happens.' },
  { name: 'Travel Insurance', description: 'Travel with confidence, wherever life and business take you.' },
  { name: 'Education Insurance', description: "Secure your child's school fees against life's uncertainties." },
  { name: 'Agricultural Insurance', description: 'Safeguard farming investments and livelihoods against loss.' }
]
