import PropType from "prop-types";

const Planets1 = (props) => {
  return (
    <>
      <div className="m-5 bg-slate-400 text-slate-200 p-10 
      rounded shadow-2xl text-xl">
        <p>Planet: {props.Planet}</p>
        <p>isGasPlanet: {props.isGasPlanet ? "YES" : "NO"}</p>
      </div>
    </>
  );
};

Planets1.defaultProps = {
  Planet: "Planet Name",
  isGasPlanet: "false",
};

Planets1.propType = {
  Planet: PropType.string,
  IsGasPLanet: PropType.bool,
};

export default Planets1;
