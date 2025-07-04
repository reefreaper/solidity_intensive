import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='text-center my-5'>
            <Spinner animation="grow" />
            <p>Loading Data...</p>
        </div>
    )
}

export default Loading;
