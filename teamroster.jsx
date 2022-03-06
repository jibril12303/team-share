import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const teamroster = () => {
  const [total, setTotal] = useState([]);
  const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;

  // }, [router.isReady])
  const {
    query: {mngrData}
  } = router;
  const props = {mngrData};
  return (
    <div>
      {JSON.stringify(props.mngrData, 4)}
    </div>
  )
}

export default teamroster