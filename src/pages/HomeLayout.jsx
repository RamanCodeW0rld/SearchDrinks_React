import { Outlet , useLoaderData, useNavigation} from 'react-router-dom';
import Navbar from '../Navbar';

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading'
    return (
        <>
            <Navbar />
            <section>
                {isPageLoading ? <div className='loading'/> : <Outlet/>}
            </section>
        </>
    );
};
export default HomeLayout;
