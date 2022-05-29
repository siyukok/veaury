import { applyVueInReact } from 'veaury'
import { useLocation, useNavigate } from 'react-router-dom'
import BasicVue from './Basic'

export default applyVueInReact(BasicVue, {
  useInjectPropsFromWrapper(reactProps) {
    // React hooks can be used in this function
    // Use the hooks of react-router-dom
    const location = useLocation()
    const navigate = useNavigate()

    // The returned object will be passed to the Vue component as props
    return {
      reactRouter: {
        navigate,
        location
      }
    }
  }
})
