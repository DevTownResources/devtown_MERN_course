import { useEffect } from "react";

function withLogger(Component) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log(`${Component.name} : mounted`);

      return () => {
        console.log(`${Component.name} : unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`${Component.name} : updated`);
    });

    return <Component {...props} />;
  };
}

export default withLogger;
