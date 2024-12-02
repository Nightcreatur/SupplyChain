import ChooseRole from './ChooseRole'
import UserInfo from './UserInfo'
import BusinessDetails from './BusinessDetail'
import TermsAndPolicies from './TermsAndPolicies'
import Verification from './Verification'
import StepNavigator from 'react-step-navigator'; import './SignUp.css'




const SignUpPage = () => {

    const steps = [{
        name: 'Choose Role',
        content: <ChooseRole />
    },
    {
        name: 'User Info',
        content: <UserInfo />
    },
    {
        name: 'Business Details',
        content: <BusinessDetails />
    },
    {
        name: 'Terms & Policies',
        content: <TermsAndPolicies />
    },
    {
        name: 'Verification',
        content: <Verification />
    }
    ]

    return (
        <div>
            <StepNavigator steps={steps} />
        </div>
    )
}

export default SignUpPage





