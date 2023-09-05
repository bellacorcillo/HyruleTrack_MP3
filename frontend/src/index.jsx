import React from "react";
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { EyeWrapper } from "./components/EyeWrapper";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export const MainDefaultPage = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-[#ffedc0] overflow-hidden">
      <div className="relative w-[1453px] h-[1024px] left-[-13px]">
        <img className="absolute w-[1440px] h-[1024px] top-0 left-[13px] object-cover" alt="Image" src="image-4.png" />
        <div className="absolute w-[1440px] h-[311px] top-0 left-[13px] bg-black" />
        <div className="absolute w-[1421px] h-[287px] top-[39px] left-0">
          <img className="absolute w-[170px] h-[146px] top-0 left-[642px] object-cover" alt="Image" src="image-3.png" />
          <img className="absolute w-[789px] h-[124px] top-[151px] left-[343px]" alt="Hyrule track" src="hyrule-track.png" />
        </div>
        <div className="absolute w-[792px] h-[530px] top-[397px] left-[337px] bg-[#60ba98]" />
        <div className="absolute w-[717px] h-[469px] top-[428px] left-[377px] bg-[#ddeee9]" />
        <div className="absolute w-[183px] h-[39px] top-[526px] left-[640px] font-normal text-black text-[20px] text-center">
          Display Name
        </div>
        <p className="absolute w-[467px] h-[39px] top-[850px] left-[502px] font-normal text-black text-[15px] text-center">
          <span className="font-normal text-black text-[15px]">
            Already have an account? Login{" "}
          </span>
          <span className="underline">HERE</span>
        </p>
        <p className="absolute w-[592px] h-[39px] top-[458px] left-[439px] font-normal text-black text-[32px] text-center">
          Create an Account to Get Started!
        </p>
        <div className="top-[680px] left-[441px] absolute w-[581px] h-[48px] bg-white rounded-[6px] border border-solid border-primary">
          <EyeWrapper />
        </div>
        <div className="absolute w-[183px] h-[39px] top-[629px] left-[643px] font-normal text-black text-[20px] text-center">
          Email
        </div>
        <div className="top-[566px] left-[441px] absolute w-[581px] h-[48px] bg-white rounded-[6px] border border-solid border-primary">
          <EyeWrapper />
        </div>
        <div className="absolute w-[183px] h-[39px] top-[744px] left-[640px] font-normal text-black text-[20px] text-center">
          Password
        </div>
        <div className="top-[784px] left-[444px] absolute w-[581px] h-[48px] bg-white rounded-[6px] border border-solid border-primary">
          <EyeWrapper />
        </div>
      </div>
    </div>
  );
};