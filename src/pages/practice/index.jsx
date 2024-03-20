import {Practice5, Practice6} from "../../components/practicingReact/indexContext.jsx";
import {
  Practice3,
  Practice4,
} from "../../components/practicingReact/indexEffect.jsx";
import Planets2 from "../../components/practicingReact/indexList.jsx";
import Planets1 from "../../components/practicingReact/indexProps.jsx";
import {
  Practice1,
  Practice2,
} from "../../components/practicingReact/indexState.jsx";

const Practice = () => {
  return (
    <>
    <div>
        < Practice6 />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Planets1 Planet="Mars" isGasPlanet={false} />
        <Planets1 Planet="Earth" isGasPlanet={false} />
        <Planets1 Planet="Jupiter" isGasPlanet={true} />
        <Planets1 Planet="Neptune" />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
        <div className=" col-span-6">
          <Planets2 />
        </div>
        <div className=" col-span-6">
          <Practice1 />
        </div>
      </div>
      <div>
        <Practice2 />
      </div>
      <div>
        <Practice3 />
      </div>
      <div>
        <Practice4 />
      </div>
    </>
  );
};

export default Practice;