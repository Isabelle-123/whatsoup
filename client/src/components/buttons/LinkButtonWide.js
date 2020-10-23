import React from 'react'
import { withRouter } from 'react-router'
import buttonsStyle from './buttonsStyle.module.css'

//FROM https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button
// AND FROM https://blog.usejournal.com/make-different-html-tags-behave-as-a-react-router-link-81b09c9edc6d
const LinkButtonWide = (props) => {
    const {
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        // ⬆ filtering out props that `button` doesn’t know what to do with.
        ...rest
    } = props
    return (
        <button
            className={buttonsStyle.buttonWithBorderWide}
            {...rest} // `children` is just another prop!
            onClick={(event) => {
                onClick && onClick(event)
                history.push(to)
            }}
        />
    )
}

export default withRouter(LinkButtonWide)

