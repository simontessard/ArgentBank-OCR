import styled from 'styled-components'

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
  padding-block: 4rem;
`
const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`
const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

function Feature({ image, alt, title, text }) {
  return (
    <FeatureItem>
      <FeatureIcon src={image} alt={alt} />
      <FeatureTitle>{title}</FeatureTitle>
      <p>{text}</p>
    </FeatureItem>
  )
}

export default Feature
