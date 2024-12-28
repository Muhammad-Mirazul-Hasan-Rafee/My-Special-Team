import PropTypes from 'prop-types';

const Player = ({ player , manageClick}) => {

    const { name, image, role, battingType, biddingPrice, country, playerId, clicked } = player;
    return (
        <div className="gap-x-2 border border-[rgba(19,19,19,0.1)] rounded-2xl h-[400px] w-[290px] mx-auto mt-6">
    <div className="bg-white rounded-lg shadow-md p-2 ml-2 h-auto w-auto">
        <img className="w-full h-32 rounded-2xl" src={image} />
        <h3 className="font-semibold text-xl mt-2">{name}</h3>
        <div className="flex justify-between mt-4">
            <p className="font-normal text-base">{country}</p>
            <p className="font-normal text-sm bg-gray-100 px-2 py-1 rounded">{role}</p>
        </div>
        <hr className="my-4" />
        <p className="font-semibold">Rating</p>
        <div className="flex justify-between mt-2 mr-2">
            <p className="font-normal text-base">Batting Type:</p>
            <p className="font-normal text-sm">{battingType}</p>
        </div>
        <div className="flex justify-between items-center mt-2 mr-2">
            <p className="font-bold text-base">Price: {biddingPrice}</p>
            <button
            onClick={() => manageClick(playerId)}
            disabled={clicked} // Disable button after click
            className={`px-4 py-2 rounded ${
              clicked ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-400 text-white hover:bg-gray-600'
            }`}
          >
            {clicked ? 'Selected' : 'Choose Player'}
          </button>
        </div>
    </div>

</div>

    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    battingType: PropTypes.string.isRequired,
    biddingPrice: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    manageClick: PropTypes.func.isRequired,
};
export default Player;