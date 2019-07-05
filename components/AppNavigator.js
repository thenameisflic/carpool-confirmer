import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DriverScreen from "./screens/DriverScreen";
import PassengerScreen from "./screens/PassengerScreen";
import ShareLocationScreen from "./screens/ShareLocationScreen";
import RideFinishedScreen from "./screens/RideFinishedScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Driver: DriverScreen,
    Passenger: PassengerScreen,
    ShareLocation: ShareLocationScreen,
    RideFinished: RideFinishedScreen
});

export default AppNavigator;
