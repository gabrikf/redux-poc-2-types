import { connect } from 'react-redux'
import * as testActions from '../store/actions/teste'

const Menu = ({ modules, dispatch }) => {

    return (

       <>
       {modules.map((module) => (
           <>
        <h1 key={module.id}>teste{module.id}</h1>
        <button onClick={() => dispatch(testActions.act(module))} type='button'>opa</button>
            </>
       ))}
        
        </>
    )
       }
export default connect(state => ({modules: state.teste.modules}))(Menu)