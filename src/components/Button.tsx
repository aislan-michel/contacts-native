import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import React from "react";

interface IButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7E9636',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
})