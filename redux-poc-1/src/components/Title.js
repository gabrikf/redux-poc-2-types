import { connect } from "react-redux"

const Title = ({activedOpa}) => {
    return (
        <h1>{activedOpa.id}</h1>
    )
}
export default connect(state => ({
    activedOpa: state.teste.activedOpa
}))(Title)