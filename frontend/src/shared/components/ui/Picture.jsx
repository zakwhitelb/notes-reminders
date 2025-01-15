

// Pics
import SunPic from '../../assets/pics/Sun.pic.png';

function Picture() {

    
    return (
        <div 
            className="flex items-center justify-center h-full w-full overflow-hidden cursor-pointer"
        >
            <img 
                className='h-full w-full object-cover rounded-[20px] md:rounded-[30px]'
                src={SunPic} 
                alt="Sun" 
            />
        </div>
    )
}

export { Picture };
