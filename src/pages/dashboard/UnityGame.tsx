import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/thesis.loader.js",
    dataUrl: "/unity/Build/thesis.data",
    frameworkUrl: "/unity/Build/thesis.framework.js",
    codeUrl: "/unity/Build/thesis.wasm",
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffffff",
        flexDirection: "column",
      }}
    >
      {!isLoaded && (
        <p style={{ color: "#fff", marginBottom: "1rem" }}>
          Loading... {Math.round(loadingProgression * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "1280px",
          height: "720px",
          background: "#000",
        }}
      />
    </div>
  );
};

export default UnityGame;
