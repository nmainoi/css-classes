import classes from '@/styles/Class1.module.css'
import { GoogleIcon,AppleIcon,FacebookIcon,GitHubIcon,MicroSoftIcon,TwitterIcon } from '@/assets/icons'
const ClassOne = () => {

    return (
        <div className={classes.Main}>

            <div className={classes.Container}>
                <form className={classes.Form}>
                    <h1>Login</h1>
                    <div className={classes.FormGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className={classes.FormGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className={classes.Checklist}>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className={classes.IconHeader}>
                        <h2>Or login with:</h2>
                    </div>
                    <div className={classes.IconList}>
                        <div className={classes.Icon}>
                            <GoogleIcon color="#fff" />
                        </div>
                        <div className={classes.Icon}>
                            <AppleIcon color="#fff" />
                        </div>
                        <div className={classes.Icon}>
                            <FacebookIcon color="#fff" />
                        </div>
                        <div className={classes.Icon}>
                            <GitHubIcon color="#fff" />
                        </div>
                        <div className={classes.Icon}>
                            <MicroSoftIcon color="#fff" />
                        </div>
                        <div className={classes.Icon}>
                            <TwitterIcon color="#fff" />
                        </div>
                    </div>
                    <div className={classes.ButtonGroup}>
                        <button type="submit">Login</button>
                        <button type="submit">Register</button>

                    </div>
                </form>
            </div>

        </div>)
}


export default ClassOne