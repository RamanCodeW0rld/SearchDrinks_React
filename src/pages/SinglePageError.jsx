import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error = useRouteError();
    return <h5>{error.message}</h5>;
};
export default SinglePageError;
