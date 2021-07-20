import {React, useState, useRef} from 'react'

export default function Contact() {
    const [userinput, setUserinput] = useState([]);
    const commentRef = useRef();

    function handleComment(e) {
        setUserinput(prevUserinput => {return [...prevUserinput, {id:Math.random(0,1000), content:commentRef.current.value}]})
        console.log(userinput)
    }

    return (
        <div className="main">
            Contact
            <div className="contacts-container">
                <div className="icons-container">
                        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU7V53////x8/gxUZva4O6Ypck5VZw1U5tMaKjQ1udnfbTk6PJwg7S/x91AXKE1Upr3+PtEX6LHz+OvutajsNDU2uh5jLtUbapec6xccau2v9mCkr6qtdPi5vDz9frr7vVvgbSKmcJtgLSTocctTJiGl8L7pnmLAAAEuklEQVR4nO3da3OiMBSA4QCSAMpdCChKqfr//+KirrO70y1GaTg5mfPOtF86dXyGSwQCMudev9sECbOlXG52/W8Zu/u2Ugjot/WTccFl1/8Rhp+Cc+g39cONxo/wISxkapvvltcUd2EoU+j3oimvqa7C/tODfifa8up+FG6FlavoLS46h/XSXiBjou3Zzrq96N9xEbONVePgl9ILs3olHReiZPZ8VPt/tvsoiqIoiqIoiqIoiqKoH4gzzrkQ48/4e/zh965/seAE4ZXFkjyQbfOobaWUQZAnye3PVzRW6VWXtx/14HdxEVare1UYFkUc78qtfzoN+3qziRqcl625SNr61IUHN3O+K8uObn9YVWWLbiFyweR+W6y/x/1Tj+2aBE+TT1+ZN7ZGJhTJplwdlXnohFxE3Up98eETprn/qg+VkHtN7L7qwyTk5/3hdR8iIff8l1dQVMLrjIn3QiLkye5NIBIhz98G4hDyvHtvG8Qi5In/xiiBSMj5e8MEHqGIwhlABEKel+9vhBiE4zq6ngM0XyjaYhbQfCEbZuxHMQhFM3MRGi9kw0sH9PiEXM5dhMYLNzO3QuOFybvHTFiEvJnzeQ2DUNSzPs4gECblbKDZQh6sbBdGcwfDscOHwUIxvCBxD1VYxF8rG3OvPXGmfHamD3enzzbI8+Rr0IyJeFIpLr54kIlIU/G4yP1P0IyJeNA/142tfMkN3tYmSlul0XC1T4xeUBN5GxXg4cKQ+kbhoADMuhznGnrtvFUQVhFeIDvHCouwTNCuo6NQ4ei3v2C+ydxTOBNctaiFCgN+gXg/MwoVjix2Jn8oe5qCMCsR72cYVxAecT8LQUXoY94MVYSuj3lXqiZE/UgSEpLQ+FRGC9xC+5chCUmIIBKS0PhoPCQhgkhIQvMjoYPhPM3tZuRvSs8KwtN54hVuAZ9tTIKJ8udTvo7bfOoVri8CC/Si3p3oKdBxsqn/HzuWAegZVS9SQMyrzEFXU/3CbAt76WYBoQ8KXEDoDrD7Uv3CQ227EHqqhn5hIW0XxoHtayn0dBvtwqwD9S0gPPrA0xa1C/sB+Dq/duEBeqK+dmHY2C4sYI+dFhDGsMdOCwh30LNPdQuzDnpOmG6hCz4pTLdwXUOfbNQtXEW2C0PgYyf9wgL42Em/MIYeLHQLsx2wT7vwuIXeDHUL+wF6V6pbuN6AX13ULDw0ti/DCvrYSbswhL9lSK8wi+HvLk2bcCqF24DXU/8PfaLt1tTVPaEyU2FiPTTjpq//3UD/SG22ycQLQOOeRvNpSGh+JCSh8dE8bxIiiIQkND8SohfSeEhCBJGQhOZnvZBGCxIiiIQkND8SohfSeEhCBJGQhOZnvZBGCxIiiIQkND8SohfSeEhCBJGQhOZnvZBGCxIiiIQkND8SohfSeEhCBJGQhOZnvZBGCxIiiIQkNL8FhUDfL7CYMGES5PkLi42HXDKgB7kuJUwvbAfzEI2FhFwUzIV5ON9CQtG4zOlAFuJSy7B0mNODPBZsGaFX96PQCVsA4iJCL6qcq9ApGm/pFXWR0cKLQucudKp68a9O0i7kQtSV8xA6fdeKdFGjZiFPvabsnT/C0Rjv5ZLPz9IrTOSleHyj1C9Jyl5QpTlSAQAAAABJRU5ErkJggg==" id="facebook" className="media-icons"/></div>
                        <div><img src="data:image/jpeg;base64,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" id="instagram" className="media-icons"/></div>
                        <div><img src="data:image/png;base64,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" id="twitter" className="media-icons"/></div>
                </div>
                <div className="comments-section">
                    <h2>Leave a comment...</h2>
                    <div className="input-container">
                        <input type="text" id="comment-input" name="comment-input" placeholder="I think..." ref={commentRef}/>
                    </div>
                    <input type="submit" value="post" onClick={handleComment}/>
                    <Comment comment={userinput}/>
                </div>
            </div>
        </div>
    )
}
