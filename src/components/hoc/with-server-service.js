import React from 'react'
import {ServerServiceConsumer} from '../server-service-context'

const withServerService = () => (Wrapped) => {
    return (props) => {
        return (
        <ServerServiceConsumer>
            {
                (serverService) => {
                    return (
                        <Wrapped {...props} serverService={serverService}/>
                    )
                }
            }
        </ServerServiceConsumer>
        );
    }
}

export default withServerService