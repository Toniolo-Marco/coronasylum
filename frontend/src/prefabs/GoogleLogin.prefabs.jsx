import { React, Authentication } from "../index.import";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_ID_CLIENT;

export default function Login() {
  const value = React.useContext(Authentication);

  const onSuccess = (res) => {
    console.log(res);
    const user = {
      tokenId: res.tokenId,
      profile: res.profileObj,
    };
    value.setUser(user);
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        profile: res.profileObj.googleId,
        accessToken: res.tokenId,
      })
    );
  };

  const onFailure = (res) => console.log("[Login failed] res:", res);
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
