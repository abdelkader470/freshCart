// import React from 'react'
// import styles from './Loader.module.css'
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="h-screen flex justify-center items-center "
      />
    </>
  );
}
