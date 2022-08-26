const Logo = ({src, alt}) => {
    return (
        <div className="logoWrapper">
            <img src={src} alt={alt} className="logo"/>
            <p>Bee-Trade Finance</p>
        </div>
    );
}
 
export default Logo;