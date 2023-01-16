import type { ReactNode } from 'react';


type IMainProps = {
  meta: ReactNode;
  children: ReactNode
};
const Main = (props: IMainProps) => {

  return (
    <div className = {`max-w-[100%] `}>
    {/* meta data part */}
    {props.meta}

    {/* header part  main wrapper*/}
    <header></header>

    {/* children part or body part */}
    <div className={` h-screen dark:bg-black dark:text-slate-400`}>
      <div>{props.children}</div>
    </div>
  </div>
  )
};

export { Main };

