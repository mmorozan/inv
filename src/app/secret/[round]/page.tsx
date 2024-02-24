import { Suspense } from "react";

import Secret from "./component";

export default function Page(props: any) {
  return (
    <Suspense>
      <Secret {...props}/>
    </Suspense>
  );
}
