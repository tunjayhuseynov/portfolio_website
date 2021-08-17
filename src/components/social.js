import { SocialIcon } from 'react-social-icons';


function Social() {

    return (
        <div className="flex flex-col justify-center items-center w-wscreen gap-20">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                <div className="col-span-full top-12 text-3xl md:text-6xl text-center text-white oswald mb-3">You Can Find Me On:</div>
                <SocialIcon className="social" bgColor="#121212" fgColor={'white'} url="https://github.com/tunjayhuseynov" />
                <SocialIcon className="social" bgColor="#14a800" fgColor={'white'} url="https://www.upwork.com/o/profiles/users/~01cd988cacf2a91939/" />
                <SocialIcon className="social" url="https://www.instagram.com/tunjayhuseynov/" />
                <SocialIcon className="social" url="https://www.linkedin.com/in/tuncay-huseynov/" />
                <SocialIcon className="social" bgColor="#ffffff" url="https://tunjayhuseynov.medium.com/" />
                <SocialIcon className="social" url="mailto:tuncayhuseynov@gmail.com" />
            </div>
        </div>)
}

export default Social