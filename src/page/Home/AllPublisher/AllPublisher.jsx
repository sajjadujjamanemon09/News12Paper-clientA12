
import Container from '../../../components/ui/Container';

const AllPublisher = () => {
    return (
        <Container>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mt-20 mb-8 text-cyan-600'>All Publisher</h2>

                <div className='grid grid-cols-4'>
                    <img src="https://i.ibb.co/y0Yv1Wd/daily-1.png" alt="" />
                    <img src="https://i.ibb.co/9yFMbXc/daily-2-1.png" alt="" />
                    <img src="https://i.ibb.co/kS2hcCH/daily-3-1.png" alt="" />
                    <img src="https://i.ibb.co/vsbxWwd/daily-4-1.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AllPublisher;