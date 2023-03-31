function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100 py-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                <p className="text-lg mb-4">&copy; 2023 Quiz Cracker</p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-100 hover:text-gray-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-100 hover:text-gray-300">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
