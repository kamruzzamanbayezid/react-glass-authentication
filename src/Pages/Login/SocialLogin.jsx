import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogin, githubLogin, twitterLogin } = UseAuth();
    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('Logged in Successfully')
                navigate('/')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex items-center justify-center gap-3">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-sm btn-neutral">google</button>
                <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-sm btn-neutral">Github</button>
                <button onClick={() => handleSocialLogin(twitterLogin)} className="btn btn-sm btn-neutral">Twitter</button>
            </div>
        </>
    );
};

export default SocialLogin;