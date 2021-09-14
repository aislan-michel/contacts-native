import {TouchableOpacityProps} from "react-native";

export interface IPersonCardProps extends TouchableOpacityProps {
    name: string;
    email: string;
    telephone: string;
}