import { gql, useQuery } from "@apollo/client"
import React from "react"
import { Redirect } from "react-router-dom"


export const IS_LOGGED_IN = gql`
  {
    me {
      id

    }
  }
`

interface Props {
    children?: React.ReactNode
}


function IsAuthenticated({ children }: Props) {
    const { loading, error, data } = useQuery(IS_LOGGED_IN)

    // console.log(data)
    // console.log(error)
    if (loading) return <p>Loading...</p>

    if (error || !data.me) {
        return <Redirect to={{ pathname: "/landing" }}
        />
    }

    return <>{children}</>
}

export default IsAuthenticated
