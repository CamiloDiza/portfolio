import PropTypes from "prop-types";

export default function Icon({ img }) {
  return (
    <>
      <img
        src={"/images/skills/" + img + ".svg"}
        alt={img}
        className="w-12 h-12"
      />
    </>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
};