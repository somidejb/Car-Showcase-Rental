"use client"
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({pageNumber, isNext} : ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathname);
    }
  return (
    <div className = "w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton 
                title="ShowMore"
                btnType = 'button'
                containerStyles="bg-primary-blue text-white rounded-full"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore