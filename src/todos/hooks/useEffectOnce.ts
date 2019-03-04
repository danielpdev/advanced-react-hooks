import React, { useEffect, useRef } from "react";
const useEffectOnce = (cb: () => any) => {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
};

export default useEffectOnce;
