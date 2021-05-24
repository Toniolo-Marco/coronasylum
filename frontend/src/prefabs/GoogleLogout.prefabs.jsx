import { React, Authentication } from "../index.import";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_ID_CLIENT;

export default function Logout() {
  const value = React.useContext(Authentication);

  const onSuccess = () => {
    value.setUser({});
    alert("Logout made successflully");
    sessionStorage.removeItem("user");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
