const Footer = () => (
    <footer className="bg-gray-900 p-4 text-center">
      <p className="text-white">&copy; {new Date().getFullYear()} Aphrohera Games. All rights reserved.</p>
      <div className="mt-2">
        <a href="https://facebook.com" className="text-white mx-2">Facebook</a> | 
        <a href="https://twitter.com" className="text-white mx-2">Twitter</a> | 
        <a href="https://linkedin.com" className="text-white mx-2">LinkedIn</a> | 
        <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
      </div>
    </footer>
  );
  
  export default Footer;
  