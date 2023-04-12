import NavigationBar from "./NavigationBar";

const hanldeAuthenticate = async () => {
  const response = await fetch('http://localhost:3001/auth/connect');
  console.log(response);
}

function AuthenticateButton() {
  return (
    <button onClick={hanldeAuthenticate}>Log in with Spotify</button>
  );
}

function AuthenticationPage() {
  return (
    <div className="authentication">
      <h1>Favorite Shuffle</h1>
      <NavigationBar />
      <p>Please log in with your Spotify account to continue.</p>
      <AuthenticateButton />
    </div>
  );
};

export default AuthenticationPage;
