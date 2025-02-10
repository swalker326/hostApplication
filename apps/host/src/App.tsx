import "./App.css";
//@ts-expect-error
import RemoteApp from "remote/RemoteEntry";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <RemoteApp />
    </div>
  );
};

export default App;
