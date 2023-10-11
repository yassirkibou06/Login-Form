import { ArrowRightIcon } from '@radix-ui/react-icons';
import CardCategories from './CardCategories';


const CategoriesGrid = () => {
    return (
        <>
        <div className='flex items-center justify-between mb-10 px-20'>
            <h2 className='font-bold text-4xl'><span className='text-blue-600'>Outstanding</span> Categories</h2>
            <a className='font-medium text-sm flex items-center gap-2 hover:text-blue-500' href="/">See More<ArrowRightIcon /></a>
        </div>
        <div className="px-20 relative grid grid-cols-3 gap-10">
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
        </div>
        </>
    );
};

export default CategoriesGrid;
