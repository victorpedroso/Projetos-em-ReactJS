import { useEffect } from "react";

const RDStation = () => {

    useEffect(()=> {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/5f2b3b2b-a526-4ed8-91e2-1d363341690f-loader.js';

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
  return null;
};

export default RDStation