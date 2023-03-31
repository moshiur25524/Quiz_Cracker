import quizeImage from '../../assets/jovanas160600377.jpg'

function HeroBanner() {
    return (
        <div className="relative bg-gray-100">
            <img
                src={quizeImage}
                alt="Example Image"
                className="object-cover object-center w-full h-64 md:h-80 lg:h-96"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        Example Title
                    </h1>
                    <h2 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                        Example Subtitle
                    </h2>
                    <p className="mt-4 text-lg text-white md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nisl sed
                        ullamcorper iaculis quis vel velit. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas. Sed ut quam eget orci fermentum bibendum ac
                        ut lacus.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
