import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "react-navigation";
import DriverScreen from "./DriverScreen";
import PassengerScreen from "./PassengerScreen";
import ShareLocationScreen from "./ShareLocationScreen";
import RideFinishedScreen from "./RideFinishedScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Driver: DriverScreen,
    Passenger: PassengerScreen,
    ShareLocation: ShareLocationScreen,
    RideFinished: RideFinishedScreen
});

export default AppNavigator;
