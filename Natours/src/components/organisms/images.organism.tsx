// PLUGINS IMPORTS //
import styled from "styled-components"
import { FC } from "react"

import NextImage from "next/image"
// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  images: Array<string>
}

const ImagesOrganism: FC<PropsType> = (props) => {
  return (
    <Wrapper>
      {props.images.map((item, index) => (
        <Image src={item} width={200} height={200} alt={`Photo ${index + 1}`} />
      ))}
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div``

const Image = styled(NextImage)``

export default ImagesOrganism
