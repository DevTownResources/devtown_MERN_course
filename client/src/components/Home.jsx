import { useEffect } from "react";
function Home() {
  const handleClickEvent = () => {
    console.log("clicked");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickEvent);
    return () => {
      document.removeEventListener("click", handleClickEvent);
    };
  }, []);

  return <div>Home</div>;
}

export default Home;
