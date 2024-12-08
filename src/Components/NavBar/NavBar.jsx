import logo from "../../assets/logo.png";
import coin from "../../assets/dollar.png";
<style>

</style>
const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center sora-font">
                <div>
                <img src={logo} className="w-[30px]" alt="" />
                </div>

                <div className="space-x-12 ml-auto">
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                </div>

                <div className="ml-24 border border-indigo-600 w-[125px] h-[52px] flex justify-center items-center rounded-xl">
                    
                    
                    <div>
                    <a className="gap-x-2" href=""><span >0</span>Coin</a>
                    </div>
                    <div>
                    <img src={coin} className="w-[19.14px] h-[20px]" alt="" />
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;