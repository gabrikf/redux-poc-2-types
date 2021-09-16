import { useSelector } from 'react-redux'


const Title = () => {
const title = useSelector((state) => state.titles.actived)
    return (
        <>
            <h1>teste{title.name} </h1>
        </>
    )
}

export default Title